import { Meta } from '../layout/Meta'
import 'twin.macro'

import { BodyText } from '@components/body-text'
import { HeadingText } from '@components/heading-text'

const PrivacyPolicy = () => (
  <div className="text-gray-600 antialiased">
    <Meta
      title={'Fresh Pickle - Privacy Policy'}
      description={'Privacy Policy for Fresh Pickle Designs, LLC'}
    />
    <div tw="mt-[64px] md:px-2xl px-xs">
      <div tw="w-full flex flex-col  h-full justify-center items-center lg:px-[108px] px-2xl py-2xl text-left">
        <HeadingText size="lg" level={1} tw="font-extrabold">
          Privacy Policy
        </HeadingText>
        <BodyText size="reg" tw="w-full mt-md">
          Effective June 5, 2023
        </BodyText>
        <BodyText size="reg" tw="mt-sm">
          This Privacy Policy explains how Fresh Pickle Designs, LLC
          (collectively, “we” or “us”) collects, uses, shares and protects
          personal information. We respect the privacy of every individual who
          visits our freshpickle.com website and/or purchases or otherwise uses
          our products and services. This Privacy Policy is our commitment to
          transparency in communicating how we collect, use, and disclose your
          personal information as well as the choices you have with respect to
          such information.
        </BodyText>
        <HeadingText size="sm" level={4} tw="font-extrabold w-full mt-md mb-sm">
          Information Collection, Use, and Sharing
        </HeadingText>
        <BodyText size="reg">
          We are the sole owners of the information collected on this site. We
          only have access to/collect information that you voluntarily give us
          via the website or via email. We will not sell or rent this
          information to anyone. We will use your information to respond to you,
          regarding the reason you contacted us. We will not share your
          information with any third party outside of our organization, other
          than as necessary to fulfill your request, e.g. to ship an order or
          unless compelled by legal authorities. Unless you ask us not to, we
          may contact you via email in the future to tell you about specials,
          new products or services, or changes to this privacy policy.
        </BodyText>
        <HeadingText size="sm" level={4} tw="font-extrabold w-full mt-md mb-sm">
          Your Access to and Control Over Information
        </HeadingText>
        <BodyText size="reg">
          We are the sole owners of the information collected on this site. We
          only have access to/collect information that you voluntarily give us
          via the website or via email. We will not sell or rent this
          information to anyone. We will use your information to respond to you,
          regarding the reason you contacted us. We will not share your
          information with any third party outside of our organization, other
          than as necessary to fulfill your request, e.g. to ship an order or
          unless compelled by legal authorities. Unless you ask us not to, we
          may contact you via email in the future to tell you about specials,
          new products or services, or changes to this privacy policy.
        </BodyText>
        <HeadingText size="sm" level={4} tw="font-extrabold w-full mt-md mb-sm">
          Security
        </HeadingText>
        <BodyText size="reg">
          We take precautions to protect your information. When you submit
          sensitive information via the website, your information is protected
          both online and offline. Wherever we collect sensitive information
          (such as credit card data), that information is encrypted and
          transmitted to us in a secure way. You can verify this by looking for
          a closed lock icon at the bottom of your web browser, or looking for
          &quot;https&quot; at the beginning of the address of the web page.
          While we use encryption to protect sensitive information transmitted
          online, we also protect your information offline. Only employees who
          need the information to perform a specific job (for example, billing
          or customer service) are granted access to personally identifiable
          information. The computers servers in which we store personally
          identifiable information are kept in a secure environment. As you
          browse freshpickle.com and other websites, online ad networks we work
          with may place anonymous cookies on your computer, and use similar
          technologies, in order to understand your interests based on your
          (anonymous) online activities, and thus to tailor more relevant ads to
          you. If you do not wish to receive such tailored advertising, you can
          visit this{' '}
          <span tw="underline text-hoverGreen">
            <a href="https://optout.networkadvertising.org/?c=1">page</a>
          </span>{' '}
          to opt out of most companies that engage in such advertising. (This
          will not prevent you from seeing ads; the ads simply will not be
          delivered through these targeting methods.)
        </BodyText>
        <BodyText size="reg" tw="w-full mt-sm">
          If you feel that we are not abiding by this privacy policy, you should
          contact us immediately via customerservice@freshpickle.com
        </BodyText>
      </div>
    </div>
  </div>
)

export default PrivacyPolicy
