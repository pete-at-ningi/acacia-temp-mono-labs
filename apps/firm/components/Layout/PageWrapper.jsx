import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';
import styled from 'styled-components';
import { UserCircleIcon } from '@heroicons/react/24/solid';

import AuthWrapper from './AuthWrapper';

const PageWrapper = ({ children, title }) => {
  const { session, avatarUrl, profile } = useAuth();
  const router = useRouter();

  const handleAvatarClick = () => {
    router.push('/profile');
  };

  const showAvatar = router.pathname !== '/profile';

  return (
    <>
      <Head>
        <title>Ningi | {!!title ? title : 'Labs'}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <main>
        {!session ? (
          <AuthWrapper />
        ) : (
          <>
            {showAvatar && (
              <AvatarContainer onClick={handleAvatarClick}>
                {avatarUrl ? (
                  <AvatarImage src={avatarUrl} alt='User Avatar' />
                ) : (
                  <UserCircleIcon
                    style={{ width: '40px', height: '40px', color: '#ccc' }}
                  />
                )}
              </AvatarContainer>
            )}

            {children}
          </>
        )}
      </main>
    </>
  );
};

const AvatarContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default PageWrapper;
