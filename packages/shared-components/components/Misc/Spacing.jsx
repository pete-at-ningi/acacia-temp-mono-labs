import Styled from 'styled-components';

const Wrapper = Styled.div`

padding:${(props) => props.theme.spacings.xlarge};

`;
const Spacing = () => {
  return <Wrapper />;
};

export default Spacing;
