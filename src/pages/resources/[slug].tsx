import * as dotenv from 'dotenv'
dotenv.config()
import Section from '@components/section'
import { GetStaticPaths, GetStaticProps } from 'next'
import { BlogPostFragment, GetBlogPostDocument } from 'src/generated/graphql'
import { Meta } from 'src/layout/Meta'
import Image from 'next/image'
import { createClient } from 'urql'
import 'twin.macro'
import { HeadingText } from '@components/heading-text'
import { BodyText } from '@components/body-text'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { GRAPHQL_ENDPOINT } from 'src/utils/constants'
import { formatDate } from 'src/utils/utils'
import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import { createClient as createSanityClient } from 'next-sanity'
type BlogPageProps = {
  blogPost?: BlogPostFragment
}
const apiVersion = '2023-09-01'
const dataset = 'production'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const SampleImageComponent = ({
  value,
  isInline,
}: {
  value: any
  isInline: boolean
}) => {
  const client = createSanityClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  })
  const { width, height } = getImageDimensions(value)
  return (
    <div tw="relative py-md justify-center flex">
      <Image
        src={urlBuilder(client)
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        width={400}
        height={height}
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    </div>
  )
}

const components: PortableTextComponents = {
  types: {
    image: SampleImageComponent,
  },
  block: {
    h1: ({ children }) => (
      <HeadingText size="lg" level={1} tw="my-xs">
        {children}
      </HeadingText>
    ),
    h2: ({ children }) => (
      <HeadingText
        size="reg"
        level={2}
        tw="my-lg font-marcellus text-[40px] leading-[48px]"
      >
        {children}
      </HeadingText>
    ),
    h3: ({ children }) => (
      <HeadingText
        size="sm"
        level={3}
        tw="my-sm font-light text-green text-[24px]"
      >
        {children}
      </HeadingText>
    ),
    h4: ({ children }) => (
      <HeadingText size="xs" level={4} tw="my-xs font-light">
        {children}
      </HeadingText>
    ),
    h5: ({ children }) => (
      <HeadingText size="2xs" level={5} tw="my-xs font-light">
        {children}
      </HeadingText>
    ),
    h6: ({ children }) => (
      <HeadingText size="sm" level={6} tw="my-xs font-light">
        {children}
      </HeadingText>
    ),
    normal: ({ children }) => (
      <BodyText size="xl" tw="opacity-70 font-normal py-xs">
        {children}
      </BodyText>
    ),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: 'disclosure-closed' }}>
        <BodyText size="reg">{children}</BodyText>
      </li>
    ),
    number: ({ children }) => (
      <li style={{ listStyleType: 'decimal' }} tw="ml-xl">
        <BodyText size="reg">{children}</BodyText>
      </li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => (
      <li>
        ✅ <BodyText size="reg">{children}</BodyText>
      </li>
    ),
  },
}

export default function BlogPage(props: BlogPageProps): React.ReactElement {
  const post = props.blogPost
  if (!post) {
    return <div>404</div>
  }
  return (
    <>
      <Meta
        title={post.seoTitle ?? `Fresh Pickle Blog - ${post.title}`}
        description={post.seoDescription ?? `${post.preview}`}
      />
      <Section tw="bg-paleGreen py-xl w-full h-full mt-lg">
        <div tw="pb-xl">
          <BlogHeader post={post} tw="text-center max-w-[800px] mx-auto" />
          <div tw="relative w-full h-[60vh] mb-lg">
            <Image
              src={post.mainImage?.asset?.url ?? ''}
              alt="about"
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
              tw="rounded-sm"
            />
          </div>
          <div tw="max-w-[720px] mx-auto">
            <div tw="mt-lg">
              <PortableText value={post.bodyRaw} components={components} />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

const BlogHeader = ({
  post,
  className,
}: {
  post: BlogPostFragment
  className?: string
}): React.ReactElement => {
  return (
    <div tw="flex flex-col items-center py-2xl" className={className}>
      <div tw="flex items-center gap-x-sm">
        {post.author?.image && (
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
          {post.author?.name ? post.author?.name : 'Fresh Pickle'} -
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
      <HeadingText size="lg" level={1}>
        {post.title}
      </HeadingText>

      <div tw="flex gap-x-sm mt-md">
        {post.categories?.map((category) => (
          <BodyText
            size="sm"
            tw="text-darkGreen tracking-widest opacity-90 text-[12px] border rounded-2xl px-xs"
            key={`${post.title} - ${category?.title}`}
          >
            {category?.title?.toUpperCase()}
          </BodyText>
        ))}
      </div>
    </div>
  )
}
export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context
) => {
  const client = createClient({
    url: GRAPHQL_ENDPOINT,
    requestPolicy: 'network-only',
  })

  const slug = (context.params?.slug as string) ?? ''

  const { data } = await client
    .query(GetBlogPostDocument, {
      slug,
    })
    .toPromise()

  const blogPost = data?.allPost?.[0] ?? undefined
  return {
    props: {
      blogPost,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
