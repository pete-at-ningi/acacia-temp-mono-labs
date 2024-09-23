import React, { useState, useEffect } from 'react';
import { useWebsitePageSections } from '../../hooks/useWebsitePageSections';
import { generateFormFields } from './generateFormFields';
import { useDebounce } from '../../hooks/useDebounce'; // Debounce hook to delay updates
import config from 'shared-config';

export default function WebsiteSections({ pageId }) {
  const {
    websiteSections,
    fetchWebsiteSections,
    addWebsiteSection,
    updateWebsiteSection,
  } = useWebsitePageSections();

  const [newSection, setNewSection] = useState({
    component_category: '',
    component_type: '',
    order: websiteSections[pageId]?.length + 1 || 1, // Set order dynamically
    data: {},
    options: {},
    description: '',
  });

  const [updatedSections, setUpdatedSections] = useState({});

  useEffect(() => {
    fetchWebsiteSections(pageId);
  }, [pageId]);

  // Debounce the updates to sections
  const debouncedUpdates = useDebounce(updatedSections, 1000);

  // Handle updating existing sections
  useEffect(() => {
    if (debouncedUpdates) {
      Object.entries(debouncedUpdates).forEach(([sectionId, sectionData]) => {
        updateWebsiteSection(sectionId, sectionData);
      });
    }
  }, [debouncedUpdates]);

  const handleInputChange = (field, value) => {
    setNewSection((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSectionChange = (sectionId, field, value) => {
    setUpdatedSections((prev) => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [field]: value,
      },
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await addWebsiteSection(pageId, newSection);
    setNewSection({
      component_category: '',
      component_type: '',
      order: websiteSections[pageId]?.length + 1 || 1,
      data: {},
      options: {},
      description: '',
    });
  };

  return (
    <>
      <div>
        {websiteSections[pageId]?.length > 0 ? (
          websiteSections[pageId].map((section) => (
            <div key={section.id}>
              <h4>{section.component_type}</h4>
              {generateFormFields(
                config[section.component_category].components.find(
                  (comp) => comp.name === section.component_type
                ).fields,
                (name, value) =>
                  handleSectionChange(section.id, `data.${name}`, value),
                section.data
              )}
              {generateFormFields(
                config[section.component_category].components.find(
                  (comp) => comp.name === section.component_type
                ).options,
                (name, value) =>
                  handleSectionChange(section.id, `options.${name}`, value),
                section.options
              )}
            </div>
          ))
        ) : (
          <p>No sections for this page.</p>
        )}
      </div>

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
            <label>Description</label>
            <input
              type='text'
              name='description'
              onChange={(e) => handleInputChange('description', e.target.value)}
              required={true}
              value={newSection.description}
            />
            <h3>{newSection.component_type} Configuration</h3>
            {generateFormFields(
              config[newSection.component_category].components.find(
                (comp) => comp.name === newSection.component_type
              ).fields,
              (name, value) => handleInputChange(`data.${name}`, value)
            )}
            {generateFormFields(
              config[newSection.component_category].components.find(
                (comp) => comp.name === newSection.component_type
              ).options,
              (name, value) => handleInputChange(`options.${name}`, value)
            )}
          </>
        )}

        <button type='submit'>Add Section</button>
      </form>
    </>
  );
}
