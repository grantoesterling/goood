import { AppProps } from 'next/app'

import GlobalStyles from '@components/global-styles'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
