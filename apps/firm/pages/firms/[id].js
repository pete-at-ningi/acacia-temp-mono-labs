import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFirms } from '../../hooks/useFirms';
import Link from 'next/link';
import PageWrapper from '../../components/Layout/PageWrapper';
import styled from 'styled-components';
import WebsiteList from '../../components/Websites/List';

const Wrapper = styled.div`
  padding: 2rem;
`;
export default function FirmDetails() {
  const router = useRouter();
  const { id } = router.query;

  const {
    activeFirm,
    handleSetActiveFirm,
    clearActiveFirm,
    isSaving,
    unsavedChanges,
    handleUpdateFirm,
    handleSaveUpdates,
    handleDeleteFirm,
  } = useFirms();

  useEffect(() => {
    if (id) {
      handleSetActiveFirm(id);
    }

    // Optional: Clear active firm when unmounting
    return () => {
      clearActiveFirm();
    };
  }, [id]);

  if (!activeFirm) {
    return <p>Loading...</p>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleUpdateFirm(name, value);
  };

  const handleSave = async () => {
    await handleSaveUpdates();
  };

  const handleDeleteThisFirm = () => {
    handleDeleteFirm(activeFirm.id);
    router.push(`/firms`);
  };

  return (
    <PageWrapper title={`Firm Details - ${activeFirm.name}`}>
      <Wrapper>
        <Link href='/firms'>
          <a>← Back to Firms</a>
        </Link>
        <h1>{activeFirm.name}</h1>
        <label>
          Firm Name:
          <input
            type='text'
            name='name'
            value={activeFirm.name}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleSave} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
        {unsavedChanges && <p>You have unsaved changes.</p>}
        <WebsiteList />
        <h3>Danger Zone</h3>
        <button onClick={() => handleDeleteThisFirm()}>Delete</button>
      </Wrapper>
    </PageWrapper>
  );
}
