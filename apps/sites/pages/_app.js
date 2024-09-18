import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';

import Config from '../config';

import { Header } from 'shared-components';
import { Footer} from 'shared-components';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Config.theme}>
      <GlobalStyle />
      <Head>
        <title>{Config.header.title}</title>
        <meta name='description' content={Config.header.description} />
        <meta name='keywords' content={Config.header.description} />
        <meta property='og:title' content={Config.header.ogTitle} />
        <meta property='og:type' content={Config.header.ogType} />
        <meta property='og:url' content={Config.header.ogUrl} />
        <meta property='og:image' content={Config.header.ogImage} />
        <meta name='theme-color' content={Config.header.themeColor} />
      </Head>
      <Header.Basic config={Config.nav} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer.Basic config={Config} />
    </ThemeProvider>
  );
}

export default MyApp;
