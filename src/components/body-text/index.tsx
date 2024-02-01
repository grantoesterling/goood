import * as React from 'react'
import tw, { styled } from 'twin.macro'

type TextSize = 'sm' | 'reg' | 'lg' | 'xl'

export interface BodyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size: TextSize
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export type BodyTextProps = BodyProps

export const BodyText = ({
  size,
  children,
  className,
  ...props
}: BodyTextProps): React.ReactElement => {
  return (
    <Wrapper className={className} size={size} {...props}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.p<Pick<BodyTextProps, 'size'>>`
  ${tw`tracking-[-0.02em] break-words font-manrope font-medium`}
  ${({ size }) => {
    /*
    The reason we have these sizes explicitly is because we have essentially two sites running and 
    if we changed the configured sizes in tailwind it would break all the sizes on the current site. 
    So in order to use the new site sizes we are defining them here, so that when we do change 
    them in tailwind there is only a few places that need to be changed. This is tracked by 
    this asana ticket: https://app.asana.com/0/1202536410781420/1202633256556783
    */
    switch (size) {
      case 'xl':
        return tw`text-[20px] leading-[30px]`
      case 'lg':
        return tw`text-[18px] leading-[28px]`
      case 'reg':
        return tw`text-[16px] leading-[28px] tracking-[-0.01em]`
      case 'sm':
        return tw`text-[14px] leading-[24px] tracking-[-0.01em]`
      default:
        return null
    }
  }}
`
