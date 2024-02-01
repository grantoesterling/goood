import { Meta } from 'src/layout/Meta'
import 'twin.macro'
import { AppConfig } from 'src/utils/AppConfig'
import { Hero } from 'src/templates/Hero'
import { GetStaticProps } from 'next'
import {
  BlogPostListFragment,
  GetHomePageDataDocument,
} from 'src/generated/graphql'
import { GRAPHQL_ENDPOINT } from 'src/utils/constants'
import { createClient } from 'urql'

type HomePageProps = {
  blogPosts: BlogPostListFragment[]
}

export default function HomePage({
  blogPosts,
}: HomePageProps): React.ReactElement {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div tw="mt-[64px] bg-purple-600">
        <Hero post={blogPosts[0]} />
        <Hero post={blogPosts[1]} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const client = createClient({
    url: GRAPHQL_ENDPOINT,
    requestPolicy: 'network-only',
  })
  const { data } = await client.query(GetHomePageDataDocument, {}).toPromise()

  const blogPosts = data?.allPost ?? []
  return {
    props: {
      blogPosts,
    },
  }
}
