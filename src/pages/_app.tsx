import { AppProps } from 'next/app'

import GlobalStyles from '@components/global-styles'
import { NavBar } from '@components/nav-bar'
import { Footer } from '@components/footer'
import { GetNavDataDocument } from 'src/generated/graphql'
import { createClient } from 'urql'
import { GRAPHQL_ENDPOINT } from 'src/utils/constants'
import { CategoryItemFragment } from '../generated/graphql';

type ExtraAppProps = {
  navCategories: CategoryItemFragment[]
} & AppProps

const App = ({ Component, pageProps, navCategories }: ExtraAppProps) => (
  <>
    <GlobalStyles />
    <NavBar categories={navCategories} />
    <Component {...pageProps} />
    <Footer />
  </>
)

App.getInitialProps = async () => {
  const client = createClient({
    url: GRAPHQL_ENDPOINT,
  })

  const { data } = await client.query(GetNavDataDocument, {}).toPromise()

  const navProducts = data?.allCategory ?? []
  return {
    navProducts,
  }
}

export default App
