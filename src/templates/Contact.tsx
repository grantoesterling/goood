import Section from '@components/section'
import 'twin.macro'
import { HeadingText } from '@components/heading-text'
import { BodyText } from '@components/body-text'
import { DotsIcon, EmailIcon } from '@components/icons'

type ContactVerticalProps = {
  title: string
  description: string
  cta: string
  icon: React.ReactElement
}

export const ContactVertical = ({
  title,
  description,
  cta,
  icon,
}: ContactVerticalProps): React.ReactElement => (
  <div tw="flex flex-col justify-start items-center text-center">
    <div tw="bg-green bg-opacity-40 p-[12px] rounded-full mb-sm stroke-darkGreen">
      {icon}
    </div>
    <BodyText size="lg" tw="font-extrabold text-center">
      {title}
    </BodyText>
    <BodyText size="reg" tw="text-center">
      {description}
    </BodyText>
    <BodyText size="reg" tw="font-extrabold text-center">
      {cta}
    </BodyText>
  </div>
)

const Contact = () => (
  <div id="contact" tw="relative">
    <Section tw="bg-offWhite">
      <div tw="flex flex-col md:py-[150px] py-[100px] justify-center items-center text-center text-darkerGreen ">
        <HeadingText size="lg" level={1} tw="font-extrabold">
          {`We'd love to hear from you`}
        </HeadingText>
        <BodyText size="lg" tw="font-extrabold mt-sm">
          Our friendly team is always here to chat
        </BodyText>
        <div tw="flex flex-col md:flex-row mt-xl justify-center w-full gap-y-lg gap-x-[144px]">
          <ContactVertical
            title="Email"
            description="Our friendly team is here to help."
            cta="customerservice@freshpickle.com"
            icon={<EmailIcon />}
          />
          <ContactVertical
            title="Wholesale"
            description="Become a wholesale partner"
            cta="wholesale@freshpickle.com"
            icon={<DotsIcon />}
          />
        </div>
      </div>
    </Section>
  </div>
)

export { Contact }
