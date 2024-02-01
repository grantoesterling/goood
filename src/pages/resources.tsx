import Section from '@components/section'
import { GetStaticProps } from 'next'

import { Meta } from 'src/layout/Meta'
import Image from 'next/image'
import { createClient } from 'urql'
import 'twin.macro'
import { HeadingText } from '@components/heading-text'
import { BodyText } from '@components/body-text'
import { formatDate } from '../utils/utils'
import Link from 'next/link'
import { SmallHero } from '@components/small-hero'
import { GRAPHQL_ENDPOINT } from 'src/utils/constants'
import { BlogPostListFragment, GetBlogPostsDocument } from 'src/generated/graphql'

type BlogPageProps = {
  blogPosts: BlogPostListFragment[]
}

export default function AllBlogPage(props: BlogPageProps): React.ReactElement {
  const posts = props.blogPosts //.concat(props.blogPosts)
  return (
    <>
      <Meta
        title={'Fresh Pickle - Blog'}
        description={'The Fresh Pickle pickleball blog!'}
      />
      <div tw="mt-[64px]">
        <SmallHero title="Blog" imageUrl="/assets/images/hero/3.jpg" />
        <Section tw="bg-paleGreen py-xl w-full h-full">
          <div tw="grid gap-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug?.current}
                href={`/resources/${post.slug?.current}`}
              >
                <div tw="flex flex-col h-full items-start justify-between gap-y-xs bg-white p-sm pb-md rounded-lg shadow-md hover:scale-[1.01] duration-100">
                  <div tw="relative w-full h-[300px] shrink-0">
                    <Image
                      src={post.mainImage?.asset?.url ?? ''}
                      alt="about"
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                      tw="rounded-sm"
                    />
                  </div>
                  <div tw="flex flex-col mt-sm px-xs justify-between h-full">
                    <div>
                      <div tw="flex gap-x-sm">
                        {post.categories?.map((category) => (
                          <BodyText
                            size="sm"
                            tw="text-darkGreen tracking-widest opacity-90 text-[12px]"
                            key={`${post.title} - ${category?.title}`}
                          >
                            {category?.title?.toUpperCase()}
                          </BodyText>
                        ))}
                      </div>

                      <HeadingText size="sm" level={1}>
                        {post.title}
                      </HeadingText>
                    </div>

                    <div tw="flex items-center gap-x-sm mt-xs">
                      {post.author && (
                        <div tw="relative">
                          <Image
                            src={post.author?.image?.asset?.url ?? ''}
                            alt="about"
                            width={32}
                            height={32}
                            style={{
                              objectFit: 'cover',
                            }}
                            tw="rounded-full"
                          />
                        </div>
                      )}
                      <BodyText size="reg" tw="text-darkGreen opacity-70">
                        {post.author?.name ? post.author.name : 'Fresh Pickle'}{' '}
                        -{' '}
                        {post.publishedAt && (
                          <span tw="italic">
                            {formatDate(post.publishedAt, {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        )}
                      </BodyText>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const client = createClient({
    url: GRAPHQL_ENDPOINT,
    requestPolicy: 'network-only',
  })
  const { data } = await client.query(GetBlogPostsDocument, {}).toPromise()

  const blogPosts = data?.allPost ?? []
  return {
    props: {
      blogPosts,
    },
    revalidate: 3600,
  }
}
