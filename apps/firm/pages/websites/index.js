import PageWrapper from '../../components/Layout/PageWrapper';
import List from '../../components/Websites/List';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
`;

export default function WebsitesHome() {
  return (
    <PageWrapper title='Websites'>
      <Wrapper>
        <List />
      </Wrapper>
    </PageWrapper>
  );
}
