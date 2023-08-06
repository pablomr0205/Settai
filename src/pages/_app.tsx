import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import NavBar from '@/components/navbar';

import theme from '../styles/theme';
import { ContactUs } from '@/components/footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        ...theme
      }}
    >
      <NavBar />
      <Component {...pageProps} />
      <ContactUs />
    </MantineProvider>
  );
}
