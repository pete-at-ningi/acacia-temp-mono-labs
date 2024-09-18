import { ThemeProvider } from 'styled-components';

const theme = {
  backgroundColor: 'red',
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
