import React, { useEffect } from 'react';
import styled from 'styled-components';
import WebsiteSections from './WebsiteSections';

const SectionWrapper = styled.div`
  border: 1px solid #eee;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export default function WebsitePages({
  websitePages,
  websiteSections,
  addWebsiteSection,
  fetchWebsiteSections,
}) {
  useEffect(() => {
    websitePages.forEach((page) => {
      fetchWebsiteSections(page.id); // Fetch sections for each page when component mounts
    });
  }, [websitePages]);

  if (!websitePages || websitePages.length === 0) {
    return <p>No pages available</p>;
  }

  return (
    <>
      {websitePages.map((page) => (
        <SectionWrapper key={page.id}>
          <h3>{page.title}</h3>
          <p>Route: {page.route}</p>
          <WebsiteSections
            pageId={page.id}
            sections={websiteSections[page.id]}
            addWebsiteSection={addWebsiteSection}
          />
        </SectionWrapper>
      ))}
    </>
  );
}
