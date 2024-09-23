import React, { useState, useEffect } from 'react';
import { useWebsitePageSections } from '../../hooks/useWebsitePageSections';
import { generateFormFields } from './generateFormFields';
import config from 'shared-config';

export default function WebsiteSections({ pageId }) {
  const { websiteSections, fetchWebsiteSections, addWebsiteSection } =
    useWebsitePageSections();

  const [newSection, setNewSection] = useState({
    component_category: '',
    component_type: '',
    order: websiteSections.length + 1, // Determine order dynamically based on existing sections
    data: {},
    options: {},
    description: '',
  });

  useEffect(() => {
    fetchWebsiteSections(pageId);
  }, [pageId]);

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
      order: websiteSections.length + 1,
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
            <label key='description'>
              Description
              <input
                type='text'
                name='description'
                onChange={(e) =>
                  handleInputChange('description', e.target.value)
                }
                required={true}
              />
              <p>what is this thing</p>
            </label>
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
