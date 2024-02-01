import Section from '@components/section'
import 'twin.macro'
import { HeadingText } from '@components/heading-text'
import { BodyText } from '@components/body-text'
import Image from 'next/image'

const About = () => (
  <Section tw="bg-paleGreen py-xl">
    <div tw="flex lg:flex-row flex-col-reverse md:py-24 py-16 justify-around items-center gap-x-[72px] gap-y-xl">
      <div tw="flex flex-col lg:w-1/2 w-full">
        <HeadingText size="lg" level={1} tw="text-darkerGreen">
          Meet the founder
        </HeadingText>
        <BodyText size="reg" tw="mt-lg text-darkerGreen opacity-75">
          Fresh Pickle is the brainchild of our founder, Lee. An avid (but
          mediocre) tennis player, she often spent more time shopping for tennis
          clothes and accessories than practicing her serves (😊)! She took up
          Pickleball in 2022 and immediately saw the draw of the sport for all
          levels of athletes and ages. Playing recreationally 2-3 times/week,
          one of the first accessories she searched for was a pickleball bag
          that met her requirements of both style and function. The idea for
          Fresh Pickle was born!
        </BodyText>
        <BodyText size="reg" tw="mt-lg text-darkerGreen opacity-75">
          Our first product, the LOLA bag was developed in 2022. Lola is the
          family 12 year old goldendoodle who has provided love and laughter for
          Lee and the family through the years, and is often described as “the
          favorite child” by her other kids!
        </BodyText>
        <BodyText size="reg" tw="mt-lg text-darkerGreen opacity-75">
          A two-time cancer survivor, Lee is constantly reminded of the joys
          that life brings, never to take yourself too seriously, strive to
          develop lasting relationships, and choose to do something that you
          love. Fresh Pickle has been a labor of love and it is her/our hope
          that our products will bring smiles to the faces of anyone who loves
          to play pickleball!
        </BodyText>
      </div>
      <div tw="border border-darkGreen p-[12px] rounded-full">
        <Image
          src="/assets/images/owner.jpg"
          alt="about"
          width={335}
          height={500}
          style={{
            objectFit: 'cover',
          }}
          tw="rounded-full"
        />
      </div>
    </div>
  </Section>
)

export { About }
