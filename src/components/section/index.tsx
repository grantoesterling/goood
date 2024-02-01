import { ReactNode } from 'react'
import 'twin.macro'

type ISectionProps = {
  title?: string
  description?: string
  bgColor?: string
  yPadding?: string
  className?: string
  children: ReactNode
}

const Section = (props: ISectionProps) => (
  <div className={props.className}>
    <div tw="mx-auto max-w-screen-xl sm:px-2xl px-sm">{props.children}</div>
  </div>
)

export default Section
