// pages/websites/[id].js

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWebsites } from '../../hooks/useWebsites';
import { useFirms } from '../../hooks/useFirms';
import Link from 'next/link';
import PageWrapper from '../../components/Layout/PageWrapper';
import styled from 'styled-components';

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

const Button = styled.button`
  padding: 8px 12px;
  background-color: ${(props) => props.theme.colors.primary || '#0070f3'};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default function WebsiteDetails() {
  const router = useRouter();
  const { id } = router.query;

  const {
    activeWebsite,
    handleSetActiveWebsite,
    clearActiveWebsite,
    isSaving,
    unsavedChanges,
    handleUpdateWebsite,
    handleSaveUpdates,
    handleDeleteWebsite,
  } = useWebsites();

  const { activeFirm } = useFirms();

  useEffect(() => {
    if (id) {
      handleSetActiveWebsite(id);
    }

    return () => {
      clearActiveWebsite();
    };
  }, [id]);

  if (!activeWebsite) {
    return <p>Loading...</p>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleUpdateWebsite(name, value);
  };

  const handleSave = async () => {
    await handleSaveUpdates();
  };

  const handleDeleteThisWebsite = () => {
    handleDeleteWebsite(activeWebsite.id);
    router.push(`/websites`);
  };

  return (
    <PageWrapper title={`Website Details - ${activeWebsite.name}`}>
      <Wrapper>
        <Link href='/websites'>
          <a>← Back to Websites</a>
        </Link>
        <h1>{activeWebsite.name}</h1>
        <Form>
          <Label>
            Website Name:
            <Input
              type='text'
              name='name'
              value={activeWebsite.name || ''}
              onChange={handleInputChange}
            />
          </Label>

          {/* Now include all the data points */}

          <h2>Theme Colors</h2>
          <Label>
            Primary Color:
            <Input
              type='text'
              name='colors_primary'
              value={activeWebsite.colors_primary || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Secondary Color:
            <Input
              type='text'
              name='colors_secondary'
              value={activeWebsite.colors_secondary || ''}
              onChange={handleInputChange}
            />
          </Label>
          {/* Add inputs for all other color fields... */}

          <h2>Header Information</h2>
          <Label>
            Title:
            <Input
              type='text'
              name='header_title'
              value={activeWebsite.header_title || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Description:
            <TextArea
              name='header_description'
              value={activeWebsite.header_description || ''}
              onChange={handleInputChange}
            />
          </Label>
          {/* Add inputs for all other header fields... */}

          <h2>Business Information</h2>
          <Label>
            Business Name:
            <Input
              type='text'
              name='business_name'
              value={activeWebsite.business_name || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Address:
            <TextArea
              name='business_address'
              value={activeWebsite.business_address || ''}
              onChange={handleInputChange}
            />
          </Label>
          {/* Add inputs for all other business fields... */}

          <h2>Social Media Links</h2>
          <Label>
            LinkedIn URL:
            <Input
              type='text'
              name='linkedin_url'
              value={activeWebsite.linkedin_url || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Twitter (X) URL:
            <Input
              type='text'
              name='x_twitter_url'
              value={activeWebsite.x_twitter_url || ''}
              onChange={handleInputChange}
            />
          </Label>
          {/* Add inputs for all other social media fields... */}

          {/* Continue adding inputs for all data points from your database schema */}

          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
          {unsavedChanges && <p>You have unsaved changes.</p>}
        </Form>

        <h3>Danger Zone</h3>
        <Button
          onClick={handleDeleteThisWebsite}
          style={{ backgroundColor: 'red' }}
        >
          Delete
        </Button>
      </Wrapper>
    </PageWrapper>
  );
}
