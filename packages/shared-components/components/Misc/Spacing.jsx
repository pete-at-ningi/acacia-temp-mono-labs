import Styled from 'styled-components';

const Wrapper = Styled.div`

padding:${(props) => props.theme.spacings.xlarge};
@media ${(props) => props.theme.breakpoints.mobile} {
   padding: ${(props) => props.theme.spacings.large};
  }
`;
const Spacing = () => {
  return <Wrapper />;
};

export default Spacing;
