import Link from 'next/link';
import styled from 'styled-components';
import Auth from './Auth';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9f9f9;
  img {
    width: 200px;
  }
  p {
    font-size: 90%;
    opacity: 0.6;
    line-height: 1.5;
    margin-top: 0;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  button {
    width: 100%;
  }
  p {
    font-size: 90%;
    opacity: 0.6;
    line-height: 1.5;
    margin-top: 0;
    text-align: center;
  }
  a {
    border-bottom: 1px solid black;
  }
  input {
    margin: 1.5rem 0 0.5rem 0;
  }
  h1 {
    margin: 1rem;
  }
`;

const AuthWrapper = () => {
  return (
    <Container>
      <LeftWrapper>
        <img src='/logomark.png' />
        <div>
          <p>
            “I want to help put members, and their professional advisers,
            <br /> in an informed position at the right time.”
          </p>
          <p>
            <b>Graham Crossley</b>
          </p>
        </div>
      </LeftWrapper>
      <RightWrapper>
        <LoginWrapper>
          <Link href='/register'>Register</Link>
        </LoginWrapper>
        <Right>
          <h1>Login</h1>
          <p>Enter your email below to login to your account</p>
          <Auth />
          <p>
            If you are having any trouble, please{' '}
            <a
              href='mailto:admin@medifintech.co.uk'
              target='_blank'
              rel='noreferrer'
            >
              contact support
            </a>
            .
          </p>
        </Right>
      </RightWrapper>
    </Container>
  );
};

export default AuthWrapper;
