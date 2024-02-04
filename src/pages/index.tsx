import { Meta } from 'src/layout/Meta'
import 'twin.macro'
import { AppConfig } from 'src/utils/AppConfig'
import { HeadingText } from '@components/heading-text'
import { css } from 'twin.macro'
import { animate, motion, AnimatePresence } from 'framer-motion'
import Canvas from 'src/layout/canvas'
import { useEffect, useState } from 'react'

export default function Home() {
  return (
    <>
      <DOM />
      <R3F />
    </>
  )
}

const R3F = () => {
  return (
    <Canvas>
      {/* <ThreeDText text="GRANT OESTERLING" textAlign="center" rotatable={true} />
      <Stars />
      <Moon /> */}
      {/* <FunHeaderText text="GRANT OESTERLING" color="#000000" /> */}
    </Canvas>
  )
}

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
        <CornerNav />
        <div tw="flex flex-col items-center justify-center z-20">
          <HeadingText tw="z-10 text-pink-400" size="reg">
            The
          </HeadingText>
          <AnimatedGooodTitle />
          <HeadingText tw="z-10 text-pink-400" size="reg">
            Company
          </HeadingText>
          <div tw="absolute top-xl left-xl ">
            <CircleText text="the future of web design" />
          </div>
        </div>
        <motion.div
          tw="absolute w-[450px] h-[450px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // Specify the rotation value
          transition={{
            delay: 2,
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            animate={{ rotate: 360 }} // Specify the rotation value
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <CircleText text="a fun new web design studio" />
          </motion.div>
        </motion.div>
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
    <div
      tw="absolute w-full h-full flex flex-col justify-between p-lg text-center text-purple-700"
      css={`
        text-shadow: #aaf 1px 0 10px;
      `}
    >
      <div tw="flex justify-between">
        <HeadingText tw=" -rotate-45" size="reg">
          Home
        </HeadingText>
        <HeadingText tw="rotate-45" size="reg">
          Projects
        </HeadingText>
      </div>
      <div tw="flex justify-between">
        <HeadingText tw="rotate-[225deg]" size="reg">
          About
        </HeadingText>
        <HeadingText tw="rotate-[135deg]" size="reg">
          Fun
        </HeadingText>
      </div>
    </div>
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
      <text fill="#2c5">
        <textPath href="#circlePath">{text}</textPath>
      </text>
    </svg>
  )
}
