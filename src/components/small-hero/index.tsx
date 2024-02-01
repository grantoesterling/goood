import Section from '@components/section'
import 'twin.macro'
import { HeadingText } from '@components/heading-text'
import Image from 'next/image'

export const SmallHero = ({
  title,
  imageUrl,

  className,
}: {
  title: string
  imageUrl: string

  className?: string
}) => (
  <div tw="w-full h-[40vh] relative" className={className}>
    <Image
      src={imageUrl}
      sizes="100vw"
      alt="hero"
      fill
      style={{
        objectFit: 'cover',
      }}
      tw="-z-20 brightness-75"
    />

    <Section tw="z-10 justify-center items-center flex h-full">
      <div tw="flex flex-col mx-auto lg:w-2/3 my-auto justify-center items-center text-center text-white ">
        <HeadingText size="display" level={1} tw="">
          {title}
        </HeadingText>
      </div>
    </Section>
  </div>
)
