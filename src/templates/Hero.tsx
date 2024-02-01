import Section from '@components/section'
import 'twin.macro'
import { HeadingText } from '@components/heading-text'
import Image from 'next/image'
import { BlogPostListFragment } from 'src/generated/graphql'
import { BodyText } from '@components/body-text'
import { formatDate } from 'src/utils/utils'

const Hero = ({ post }: { post: BlogPostListFragment }) => (
  <div tw="w-full h-[75vh]">
    <Section tw="z-10 justify-center items-center flex h-full w-full">
      <div tw="bg-gray-800 rounded-2xl flex h-full p-xl w-full gap-x-xl">
        <div tw="relative w-1/2 h-[400px] min-w-[400px] shrink-0">
          <Image
            src={post.mainImage?.asset?.url ?? ''}
            alt={post.mainImage?.asset?.altText ?? ''}
            fill
            sizes="25vw"
            style={{
              objectFit: 'cover',
            }}
            tw="rounded-md"
          />
        </div>
        <div tw="flex flex-col justify-center items-center text-center text-white">
          <HeadingText size="lg" level={1} tw="">
            {post.title}
          </HeadingText>
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
            <BodyText size="reg" tw="text-white opacity-70">
              {post.author?.name ? post.author.name : 'Fresh Pickle'} -{' '}
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
    </Section>
  </div>
)

export { Hero }
