import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFirms } from '../../hooks/useFirms';
import Link from 'next/link';
import PageWrapper from '../../components/Layout/PageWrapper';
import styled from 'styled-components';
import WebsiteList from '../../components/Websites/List';

const Wrapper = styled.div`
  padding: 2rem;
  h1 {
    span {
      font-size: 0.8rem;
      margin-left: 0.5rem;
      font-weight: 400;
      opacity: 0.7;
    }
  }
`;
export default function FirmDetails() {
  const router = useRouter();
  const { id } = router.query;

  const {
    activeFirm,
    handleSetActiveFirm,
    clearActiveFirm,
    isSaving,
    handleUpdateFirm,
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

  const handleDeleteThisFirm = () => {
    handleDeleteFirm(activeFirm.id);
    router.push(`/firms`);
  };

  return (
    <PageWrapper title={`Firm Details - ${activeFirm.name}`}>
      <Wrapper>
        <h1>
          {activeFirm.name}
          <span>{isSaving && 'Saving Changes...'}</span>
        </h1>

        <div>
          <label>
            Firm Name:
            <input
              type='text'
              name='name'
              value={activeFirm.name}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <h3>Danger Zone</h3>
        <button onClick={() => handleDeleteThisFirm()}>Delete</button>

        <hr />
        <WebsiteList />
      </Wrapper>
    </PageWrapper>
  );
}
