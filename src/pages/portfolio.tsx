import { Meta } from 'src/layout/Meta'
import 'twin.macro'
import { AppConfig } from 'src/utils/AppConfig'
import { HeadingText } from '@components/heading-text'
import { css } from 'twin.macro'
import { motion } from 'framer-motion'
import { BodyText } from '@components/body-text'
import Image from 'next/image'
import { Button, ButtonType } from '@components/button'
import { BackButton } from '@components/back-button'
import { useRef, useState } from 'react'
export default function PortfolioPage() {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div tw="fixed top-0 left-0 w-full h-full">
        <div
          tw="h-full w-full absolute"
          css={css`
            /* filter: contrast(350%) brightness(100%); */
            background: radial-gradient(#a020f0, transparent),
              url(https://grainy-gradients.vercel.app/noise.svg);
          `}
        />
        <div
          tw="h-full w-full absolute"
          css={css`
              background: red
              mix-blend-mode: multiply;
            `}
        />
      </div>
      <div tw="absolute top-md left-md">
        <BackButton to="/" text="take me home!" />
      </div>
      <div tw="w-[100vw] h-[300vh]">
        <div tw="w-full h-full flex flex-col gap-y-[80px] mt-[80px] text-center items-center">
          <TiltCard tw="bg-white/40 backdrop-blur-md rounded-2xl w-2/3 h-1/3 flex flex-col items-center justify-center p-xl drop-shadow-md">
            <HeadingText size="reg">
              {`GOOOD covers a wide range of projects. From custom Framer designs,
              to experimental React sites, to full-blown eCommerce platforms
              with Shopify capabilities. You're in good company.`}
            </HeadingText>
          </TiltCard>
          <PortfolioItem
            name="Fresh Pickle"
            description="An eCommerce site for a pickleball brand"
            image="/assets/images/freshpickle-site.png"
            link="https://www.freshpickle.com"
          />
          <PortfolioItem
            name="Music Club CLT"
            description="A bespoke Framer site for a private music club"
            image="/assets/images/exstasis-site.png"
            link="https://www.granto.xyz/exstasis"
          />
          <PortfolioItem
            name="Exstasis"
            description="A custom informational React site for a generative art project"
            image="/assets/images/exstasis-site.png"
            link="https://www.granto.xyz/exstasis"
          />
        </div>
      </div>
    </>
  )
}

const PortfolioItem = ({
  name,
  description,
  image,
  link,
}: {
  name: string
  description: string
  image: string
  link: string
}) => {
  return (
    <motion.div tw="flex gap-x-lg w-full justify-center items-center h-[1000px]">
      <motion.div tw="flex flex-col">
        <HeadingText size="lg">{name}</HeadingText>
        <BodyText size="reg">{description}</BodyText>
      </motion.div>
      <Button buttonType={ButtonType.unstyled} to={link}>
        <motion.div
          tw="relative w-[800px] h-[500px]"
          whileHover={{
            scale: 1.01,
          }}
          initial={{ opacity: 0, y: 50, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
        >
          <Image
            src={image}
            alt={name}
            fill
            objectFit="cover"
            tw="rounded-[64px]"
          />
        </motion.div>
      </Button>
    </motion.div>
  )
}

const TiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const ROTATION_RANGE = 14.5
  const HALF_ROTATION_RANGE = 14.5 / 2
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rY = mouseX / width - HALF_ROTATION_RANGE
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1

    setRotateX(rX)
    setRotateY(rY)
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      tw="relative"
      className={className}
    >
      {children}
    </motion.div>
  )
}
