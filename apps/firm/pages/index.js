import Link from 'next/link';
import styled from 'styled-components';

import PageWrapper from '../components/Layout/PageWrapper';

const Wrapper = styled.div`
  padding: 2rem;
`;

export default function Home() {
  return (
    <PageWrapper title='Dashboard'>
      <Wrapper>
        <h1>Firm Dashboard</h1>
        <div>
          <Link href='/firms'>
            <button>Firms</button>
          </Link>
        </div>
        <div>
          <Link href='/websites'>
            <button>Websites</button>
          </Link>
        </div>
      </Wrapper>
    </PageWrapper>
  );
}
