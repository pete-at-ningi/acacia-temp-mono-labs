import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useWebsites } from '../../../hooks/useWebsites';
import PageWrapper from '../../../components/Layout/PageWrapper';
import styled from 'styled-components';
import { FiInfo } from 'react-icons/fi';

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

const TextArea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InfoIcon = styled(FiInfo)`
  margin-left: 8px;
  cursor: pointer;
  color: #888;
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: #fff;
  color: #333;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px;
  z-index: 1000;
  top: 100%;
  left: 0;
  margin-top: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const SectionWrapper = styled.div`
  border: 1px solid #eee;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export default function WebsiteDetails() {
  const router = useRouter();
  const { id } = router.query;

  const {
    activeWebsite,
    handleSetActiveWebsite,
    websitePages,
    websiteSections,
    addWebsitePage,
    addWebsiteSection,
  } = useWebsites();

  const [tooltipVisible, setTooltipVisible] = useState(null);
  const [newPage, setNewPage] = useState({ route: '', title: '' });

  useEffect(() => {
    if (id) {
      handleSetActiveWebsite(id);
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

  const handleSave = async () => {
    await handleSaveUpdates();
  };

  return (
    <PageWrapper title={`Website Details - ${activeWebsite.name}`}>
      <Wrapper>
        <h1>{activeWebsite.name} | Edit Mode</h1>

        <h2>Website Pages</h2>
        {websitePages.map((page) => (
          <SectionWrapper key={page.id}>
            <h3>{page.title}</h3>
            <p>Route: {page.route}</p>
            {/* Fetch and display sections for each page */}
            <div>
              {websiteSections[page.id]?.map((section) => (
                <div key={section.id}>
                  <h4>{section.component_type}</h4>
                  {/* Render section details */}
                </div>
              ))}
              <button
                onClick={() =>
                  addWebsiteSection(page.id, {
                    component_type: 'text',
                    order: 1,
                  })
                }
              >
                Add Section
              </button>
            </div>
          </SectionWrapper>
        ))}
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
