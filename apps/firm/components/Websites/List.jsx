// pages/websites/index.js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useWebsites } from '../../hooks/useWebsites';
import { useFirms } from '../../hooks/useFirms';
import PageWrapper from '../Layout/PageWrapper';
import AddWebsiteModal from './AddWebsiteModal';
import { FiSearch } from 'react-icons/fi';

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
  button {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  margin: 0;
`;

const Count = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-left: 1rem;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 300px;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 32%;
  left: 12px;
  transform: translateY(-50%);
  color: #999;
`;

const WebsiteList = styled.div`
  margin-top: 1rem;
`;

const LineItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  padding: 8px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f9f9f9;
    cursor: pointer;
    opacity: 0.5;
  }
`;

export default function WebsitesHome() {
  const {
    websites,
    search,
    setSearch,
    handleSetActiveWebsite,
    clearActiveWebsite,
    addWebsite,
  } = useWebsites();
  const { activeFirm } = useFirms();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // Set activeWebsite to null when landing on the page
  useEffect(() => {
    clearActiveWebsite();
  }, []);

  const handleWebsiteSelect = (websiteId) => {
    handleSetActiveWebsite(websiteId);
    router.push(`/websites/${websiteId}`);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddWebsite = async (websiteData) => {
    if (activeFirm) {
      websiteData.firm_id = activeFirm.id;
    }

    await addWebsite(websiteData);
    setIsModalOpen(false);
  };

  return (
    <PageWrapper title='Websites'>
      <>
        <Header>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Title>Websites</Title>
            <Count>({websites.length})</Count>
          </div>
          <button onClick={handleOpenModal}>Add New</button>
        </Header>
        {activeFirm ? (
          <p>Firm: {activeFirm.name}</p>
        ) : (
          <p>No firm selected. Showing all websites.</p>
        )}
        <SearchContainer>
          <SearchInput
            type='text'
            placeholder='Search Websites...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon size={20} />
        </SearchContainer>
        <WebsiteList>
          {websites.map((website) => (
            <LineItem
              key={website.id}
              onClick={() => handleWebsiteSelect(website.id)}
            >
              <div>{website.name}</div>
            </LineItem>
          ))}
        </WebsiteList>
      </>
      {isModalOpen && (
        <AddWebsiteModal onClose={handleCloseModal} onSave={handleAddWebsite} />
      )}
    </PageWrapper>
  );
}
