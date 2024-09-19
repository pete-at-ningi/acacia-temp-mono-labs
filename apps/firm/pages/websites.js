import Link from 'next/link';
import styled from 'styled-components';

import PageWrapper from '../components/Layout/PageWrapper';

const Wrapper = styled.div`
  padding: 2rem;
`;

export default function WebsitesHome() {
  return (
    <PageWrapper title='Websites'>
      <Wrapper>
        <h1>Websites</h1>
      </Wrapper>
    </PageWrapper>
  );
}
