import React from 'react';

export default function WebsiteSections({
  pageId,
  sections = [],
  addWebsiteSection,
}) {
  return (
    <>
      {sections.length > 0 ? (
        sections.map((section) => (
          <div key={section.id}>
            <h4>{section.component_type}</h4>
            {/* You can render more section details here */}
          </div>
        ))
      ) : (
        <p>No sections for this page.</p>
      )}
      <button
        onClick={() =>
          addWebsiteSection(pageId, { component_type: 'text', order: 1 })
        }
      >
        Add Section
      </button>
    </>
  );
}
