import Link from 'next/link';
import styled from 'styled-components';

import PageWrapper from '../components/Layout/PageWrapper';

const Wrapper = styled.div`
  padding: 2rem;
`;

export default function FirmsHome() {
  return (
    <PageWrapper title='Firms'>
      <Wrapper>
        <h1>Firms</h1>
      </Wrapper>
    </PageWrapper>
  );
}
