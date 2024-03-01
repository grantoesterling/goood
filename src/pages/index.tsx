import { Meta } from 'src/layout/Meta'
import 'twin.macro'
import { AppConfig } from 'src/utils/AppConfig'
import { HeadingText } from '@components/heading-text'
import { css } from 'twin.macro'
import { animate, motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Button, ButtonType } from '@components/button'
// import Canvas from 'src/layout/canvas'
// import FunHeaderText from '@components/drei-text'

export default function Home() {
  return (
    <>
      <DOM />
      {/* <R3F /> */}
    </>
  )
}
// // canvas components go here
// const R3F = () => {
//   return (
//     <Canvas>
//       <FunHeaderText text="GOOOD" color="hotpink" />
//     </Canvas>
//   )
// }

const DOM = () => {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <div tw="w-[100vw] h-[100vh] flex justify-center items-center">
        <div tw="absolute top-0 left-0 w-full h-full">
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
        <div />
        {/* <CornerNav /> */}
        <div tw="flex flex-col items-center justify-center z-20">
          <HeadingText tw="z-10 text-pink-400" size="reg">
            The
          </HeadingText>
          <AnimatedGooodTitle />
          <HeadingText tw="z-10 text-pink-400" size="reg">
            Company
          </HeadingText>
          <HeadingText
            tw="z-10 text-white max-w-[600px] text-center mt-sm"
            size="reg"
          >
            A web design and development firm to keep your eye on. Full website
            coming soon
          </HeadingText>
          <div tw="absolute top-xl left-xl ">
            <CircleText text="the future of web design" />
          </div>
        </div>
      </div>
    </>
  )
}

const AnimatedGooodTitle = () => {
  const startinNum = 30
  const [num, setNum] = useState(startinNum)

  useEffect(() => {
    const controls = animate(startinNum, 3, {
      duration: 2.5,
      ease: 'easeOut',
      onUpdate: (latest) => setNum(latest),
    })

    return controls.stop
  }, [])
  return (
    <HeadingText
      tw="z-10 text-pink-300"
      size="display"
      css={`
        text-shadow: #faa 1px 0 10px;
      `}
    >
      <AnimatePresence>
        <motion.span key={'G'}>G</motion.span>
        {Array(startinNum)
          .fill('O')
          .map((letter, index) =>
            num > index ? <motion.span key={index}>{letter}</motion.span> : null
          )}
        <motion.span key={'D'}>D</motion.span>
      </AnimatePresence>
    </HeadingText>
  )
}

const CornerNav = () => {
  return (
    <div tw="absolute w-full h-full flex flex-col justify-between px-lg py-2xl">
      <div tw="flex justify-between">
        <MenuItem text="Home" angle={-45} />
        <MenuItem text="Portfolio" angle={45} tw="pt-sm" />
      </div>
      <div tw="flex justify-between">
        <MenuItem text="About" angle={225} tw="pb-sm" />
        <MenuItem text="Fun" angle={135} />
      </div>
    </div>
  )
}

const MenuItem = ({
  text,
  angle,
  className,
}: {
  text: string
  link?: string
  angle: number
  className?: string
}) => {
  return (
    <motion.div
      tw="text-center text-purple-700 "
      initial={{
        rotate: angle,
      }}
      whileHover={{
        scale: 1.04,
      }}
      className={className}
    >
      <Button buttonType={ButtonType.unstyled} to={`/${text.toLowerCase()}`}>
        <HeadingText size="reg">{text}</HeadingText>
      </Button>
    </motion.div>
  )
}

const CircleText = ({ text }: { text: string; className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      tw="text-fuchsia-500"
    >
      <path
        id="circlePath"
        fill="none"
        d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
      />
      <text fill="#0b6">
        <textPath href="#circlePath">{text}</textPath>
      </text>
    </svg>
  )
}
