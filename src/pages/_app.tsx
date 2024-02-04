import { AppProps } from 'next/app'

import GlobalStyles from '@components/global-styles'
import { Footer } from '@components/footer'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
    <Footer />
  </>
)

export default App
