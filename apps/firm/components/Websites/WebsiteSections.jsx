import React, { useState, useEffect } from 'react';
import { useWebsitePageSections } from '../../hooks/useWebsitePageSections';
import { generateFormFields } from './generateFormFields';
import { useDebounce } from '../../hooks/useDebounce';
import config from 'shared-config';

export default function WebsiteSections({ pageId }) {
  const {
    websiteSections,
    fetchWebsiteSections,
    updateWebsiteSection,
    addWebsiteSection,
  } = useWebsitePageSections();

  // Local state for each section's data (allows editing without re-rendering whole form)
  const [editedSections, setEditedSections] = useState({});

  // Load existing sections when the pageId changes
  useEffect(() => {
    fetchWebsiteSections(pageId);
  }, [pageId]);

  // Debounced save function to avoid saving on every keystroke
  const debouncedSave = useDebounce((sectionId, data) => {
    updateWebsiteSection(sectionId, data);
  }, 500);

  // Handle input changes in form fields
  const handleInputChange = (sectionId, field, value) => {
    // Update the local edited state for this section
    setEditedSections((prev) => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [field]: value,
      },
    }));

    // Call the debounced save function
    debouncedSave(sectionId, {
      ...editedSections[sectionId],
      [field]: value,
    });
  };

  // Initialize local state for each section when they are fetched
  useEffect(() => {
    if (websiteSections[pageId]) {
      const initialSections = websiteSections[pageId].reduce((acc, section) => {
        acc[section.id] = section;
        return acc;
      }, {});
      setEditedSections(initialSections);
    }
  }, [websiteSections, pageId]);

  return (
    <div>
      {websiteSections[pageId]?.length > 0 ? (
        websiteSections[pageId].map((section) => (
          <div key={section.id}>
            <h4>{section.component_type}</h4>

            <label>
              Description
              <input
                type='text'
                value={editedSections[section.id]?.description || ''}
                onChange={(e) =>
                  handleInputChange(section.id, 'description', e.target.value)
                }
              />
            </label>

            <h5>Section Fields</h5>
            {generateFormFields(
              config[section.component_category].components.find(
                (comp) => comp.name === section.component_type
              ).fields,
              (name, value) =>
                handleInputChange(section.id, `data.${name}`, value),
              editedSections[section.id]?.data || {} // Pass the existing data for the section
            )}

            <h5>Section Options</h5>
            {generateFormFields(
              config[section.component_category].components.find(
                (comp) => comp.name === section.component_type
              ).options,
              (name, value) =>
                handleInputChange(section.id, `options.${name}`, value),
              editedSections[section.id]?.options || {} // Pass the existing options for the section
            )}
          </div>
        ))
      ) : (
        <p>No sections for this page.</p>
      )}

      {/* Form to add new section */}
      <AddNewSectionForm
        pageId={pageId}
        addWebsiteSection={addWebsiteSection}
        websiteSections={websiteSections}
      />
    </div>
  );
}

function AddNewSectionForm({ pageId, addWebsiteSection, websiteSections }) {
  const [newSection, setNewSection] = useState({
    component_category: '',
    component_type: '',
    order: (websiteSections[pageId]?.length || 0) + 1, // Set order dynamically
    data: {},
    options: {},
    description: '',
  });

  const handleInputChange = (field, value) => {
    setNewSection((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await addWebsiteSection(pageId, newSection);
    setNewSection({
      component_category: '',
      component_type: '',
      order: (websiteSections[pageId]?.length || 0) + 1,
      data: {},
      options: {},
      description: '',
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Category</label>
      <select
        value={newSection.component_category}
        onChange={(e) =>
          handleInputChange('component_category', e.target.value)
        }
      >
        <option value=''>Select a category</option>
        {Object.keys(config).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {newSection.component_category && (
        <>
          <label>Component Type</label>
          <select
            value={newSection.component_type}
            onChange={(e) =>
              handleInputChange('component_type', e.target.value)
            }
          >
            <option value=''>Select a component type</option>
            {config[newSection.component_category]?.components.map(
              (component) => (
                <option key={component.name} value={component.name}>
                  {component.name}
                </option>
              )
            )}
          </select>
        </>
      )}

      {newSection.component_type && (
        <>
          <label>
            Description
            <input
              type='text'
              value={newSection.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </label>
        </>
      )}

      <button type='submit'>Add Section</button>
    </form>
  );
}
