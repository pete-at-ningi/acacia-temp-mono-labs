import '../styles/globals.css';
import { AuthProvider } from '../hooks/useAuth';
import { NotificationProvider } from '../hooks/useNotification';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';

import { FirmProvider } from '../hooks/useFirms';
import { WebsiteProvider } from '../hooks/useWebsites';
import { WebsitePagesProvider } from '../hooks/useWebsitePages';
import { WebsitePageSectionsProvider } from '../hooks/useWebsitePageSections';

const Theme = {
  colors: {
    primary: '#283149',
    secondary: '#3a476a',
    accent: '#b5dae6',
    light: '#dbedf3',
    dark: '#161b28',
    white: '#ffffff',
  },
  fonts: {
    primary: "'Outfit', sans-serif",
  },
  fontSizes: {
    small: '0.875rem', // 14px
    medium: '1rem', // 16px
    large: '1.25rem', // 20px
    xlarge: '2.5rem', // 24px
    massive: '3.5rem', // 24px
  },
  spacings: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '64px',
  },
  borders: {
    radius: '4px',
  },
  breakpoints: {
    mobile: 'only screen and (max-width: 600px)',
    tablet: 'only screen and (min-width: 601px) and (max-width: 900px)',
    desktop: 'only screen and (min-width: 901px)',
    maxWidth: '1400px',
  },
  nav: {
    logo: '48px',
  },
  hover: { opacity: 0.5 },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <NotificationProvider>
        <AuthProvider>
          <FirmProvider>
            <WebsiteProvider>
              <WebsitePagesProvider>
                <WebsitePageSectionsProvider>
                  <GlobalStyle />
                  <Head>
                    <title>Firm</title>
                  </Head>

                  <main>
                    <Component {...pageProps} />
                  </main>
                </WebsitePageSectionsProvider>
              </WebsitePagesProvider>
            </WebsiteProvider>
          </FirmProvider>
        </AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
