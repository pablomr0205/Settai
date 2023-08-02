import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import NavBar from '@/components/navbar';

import theme from '../styles/theme';

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
    </MantineProvider>
  );
}
