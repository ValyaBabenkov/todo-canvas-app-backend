import App from '../src/components/screen/'
import { DeviceThemeProvider, SSRProvider } from '@sberdevices/plasma-ui';
import { GlobalStyle } from '../src/theme/GlobalStyle';

export default function Home({ pageProps }) {
  return (
    <DeviceThemeProvider>
        <SSRProvider>
           <App {...pageProps} />
          <GlobalStyle />
        </SSRProvider>
      </DeviceThemeProvider>
  )
}
