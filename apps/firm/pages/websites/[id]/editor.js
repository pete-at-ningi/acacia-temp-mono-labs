import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useWebsites } from '../../../hooks/useWebsites';
import { useWebsitePages } from '../../../hooks/useWebsitePages';
import { useWebsitePageSections } from '../../../hooks/useWebsitePageSections';
import PageWrapper from '../../../components/Layout/PageWrapper';
import styled from 'styled-components';
import { FiInfo } from 'react-icons/fi';
import WebsitePages from '../../../components/Websites/WebsitePages';

const Wrapper = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default function WebsiteDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Use hooks from `useWebsites`, `useWebsitePages`, and `useWebsitePageSections`
  const { activeWebsite, handleSetActiveWebsite } = useWebsites();
  const { websitePages, fetchWebsitePages, addWebsitePage } = useWebsitePages();
  const { websiteSections, fetchWebsiteSections, addWebsiteSection } =
    useWebsitePageSections();

  const [newPage, setNewPage] = useState({ route: '', title: '' });

  useEffect(() => {
    if (id) {
      handleSetActiveWebsite(id);
      fetchWebsitePages(id);
    }
  }, [id]);

  if (!activeWebsite) {
    return <p>Loading...</p>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPage((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPage = async () => {
    await addWebsitePage(activeWebsite.id, newPage);
    setNewPage({ route: '', title: '' });
  };

  return (
    <PageWrapper title={`Website Details - ${activeWebsite.name}`}>
      <Wrapper>
        <h1>{activeWebsite.name} | Edit Mode</h1>

        <h2>Website Pages</h2>
        <WebsitePages
          websitePages={websitePages}
          websiteSections={websiteSections}
          addWebsiteSection={addWebsiteSection}
          fetchWebsiteSections={fetchWebsiteSections} // Pass fetch function for sections
        />

        <h2>Add New Page</h2>
        <Form>
          <Label>
            Route:
            <Input
              type='text'
              name='route'
              value={newPage.route}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Title:
            <Input
              type='text'
              name='title'
              value={newPage.title}
              onChange={handleInputChange}
            />
          </Label>
          <button type='button' onClick={handleAddPage}>
            Add Page
          </button>
        </Form>
      </Wrapper>
    </PageWrapper>
  );
}
