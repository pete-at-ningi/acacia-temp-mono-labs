import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  grid-gap: ${(props) => props.theme.spacings.medium};
  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

const ButtonsGroup = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ButtonsGroup;
