import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useFirms } from '../../hooks/useFirms';
import PageWrapper from '../../components/Layout/PageWrapper';
import AddFirmModal from '../../components/Firms/AddFirmModal';
import { FiSearch } from 'react-icons/fi'; // Importing the search icon

const Wrapper = styled.div`
  padding: 2rem;
`;

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

const FirmList = styled.div`
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

export default function FirmsHome() {
  const {
    firms,
    search,
    setSearch,
    handleSetActiveFirm,
    clearActiveFirm,
    addFirm,
  } = useFirms();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // Set activeFirm to null when landing on the page
  useEffect(() => {
    clearActiveFirm();
  }, []);

  const handleFirmSelect = (firmId) => {
    handleSetActiveFirm(firmId);
    router.push(`/firms/${firmId}`);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddFirm = async (firmData) => {
    await addFirm(firmData);
    setIsModalOpen(false);
  };

  return (
    <PageWrapper title='Firms'>
      <Wrapper>
        <Header>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Title>Firms</Title>
            <Count>({firms.length})</Count>
          </div>
          <button onClick={handleOpenModal}>Add New</button>
        </Header>
        <SearchContainer>
          <SearchInput
            type='text'
            placeholder='Search Firms...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon size={20} />
        </SearchContainer>
        <FirmList>
          {firms.map((firm) => (
            <LineItem key={firm.id} onClick={() => handleFirmSelect(firm.id)}>
              <div>{firm.name}</div>
            </LineItem>
          ))}
        </FirmList>
      </Wrapper>
      {isModalOpen && (
        <AddFirmModal onClose={handleCloseModal} onSave={handleAddFirm} />
      )}
    </PageWrapper>
  );
}
