import Styled from 'styled-components';

const Wrapper = Styled.div`
height: 3px;
width: 40px;
background-color: ${(props) => props.theme.colors.primary};
border-radius: ${(props) => props.theme.borders.radius};

`;
const DividerLine = () => {
  return <Wrapper />;
};

export default DividerLine;
