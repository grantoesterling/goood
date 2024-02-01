import Section from '@components/section'
import 'twin.macro'
import { AmazonIcon, FacebookIcon, InstagramIcon } from '@components/icons'
import Link from 'next/link'
import { Button, ButtonType } from '@components/button'
const InstagramLink = 'https://www.instagram.com/freshpickledesigns/'
const FacebookLink = 'https://www.facebook.com/FreshPickleDesigns'
const AmazonLink = 'https://www.amazon.com/dp/B0BWNPGHT8?ref=myi_title_dp&th=1'

const Footer = () => (
  <>
    <Section tw="bg-darkGreen py-2xl">
      <div tw="flex flex-col lg:flex-row justify-between items-center gap-y-lg">
        <div tw="lg:flex-row flex flex-col items-center lg:gap-x-xs xl:gap-x-md">
          <Button
            buttonType={ButtonType.unstyled}
            size="sm"
            to={'/#products'}
            tw="text-white flex-shrink-0"
          >
            OUR PRODUCTS
          </Button>
          <Button
            buttonType={ButtonType.unstyled}
            size="sm"
            to={'/#about'}
            tw="text-white"
          >
            ABOUT
          </Button>
          <Button
            buttonType={ButtonType.unstyled}
            size="sm"
            to={'/#contact'}
            tw="text-white"
          >
            CONTACT
          </Button>
          <Button
            buttonType={ButtonType.unstyled}
            size="sm"
            to={'/#contact'}
            tw="text-white"
          >
            WHOLESALE
          </Button>
          <Button
            buttonType={ButtonType.unstyled}
            size="sm"
            to={'/register'}
            tw="text-white"
          >
            REGISTER
          </Button>
          <Button
            buttonType={ButtonType.unstyled}
            size="sm"
            to={'/privacy-policy'}
            tw="text-white"
          >
            PRIVACY POLICY
          </Button>
        </div>
        <div tw="flex gap-x-xs">
          <Link legacyBehavior href={InstagramLink}>
            <a
              href={InstagramLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Check out our Instagram"
            >
              <InstagramIcon tw="cursor-pointer" />
            </a>
          </Link>
          <Link legacyBehavior href={FacebookLink}>
            <a
              href={FacebookLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Check out our Facebook page"
            >
              <FacebookIcon tw="cursor-pointer" />
            </a>
          </Link>
          <Link legacyBehavior href={AmazonLink}>
            <a
              href={AmazonLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Check out our Amazon page"
            >
              <AmazonIcon tw="cursor-pointer" />
            </a>
          </Link>
        </div>
      </div>
    </Section>
  </>
)

export { Footer }
