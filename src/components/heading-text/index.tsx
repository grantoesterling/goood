import * as React from 'react'
import tw, { styled } from 'twin.macro'

type HeadingSize = 'sm' | 'reg' | 'lg' | 'display' | 'xs' | '2xs'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size: HeadingSize
  level?: 1 | 2 | 3 | 4 | 5 | 6
  as?: React.ElementType
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export type HeadingTextProps = HeadingProps

export const HeadingText = ({
  level,
  size,
  children,
  className,
  as,
  ...props
}: HeadingTextProps): React.ReactElement => {
  const tag = as ?? (`h${level}` as keyof JSX.IntrinsicElements)

  return (
    <Wrapper as={tag} className={className} size={size} {...props}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.h2<Pick<HeadingProps, 'size'>>`
  ${tw`tracking-[-0.02em] break-words font-manrope`}
  ${({ size }) => {
    /*
    The reason we have these sizes explicitly is because we have essentially two sites running and 
    if we changed the configured sizes in tailwind it would break all the sizes on the current site. 
    So in order to use the new site sizes we are defining them here, so that when we do change 
    them in tailwind there is only a few places that need to be changed. This is tracked by 
    this asana ticket: https://app.asana.com/0/1202536410781420/1202633256556783
    */
    switch (size) {
      case 'display':
        return tw`md:text-[72px] text-[48px] md:leading-[72px] leading-[54px] tracking-[-0.02em] font-marcellus`
      case 'lg':
        return tw`md:text-[56px] text-[42px] md:leading-[64px] leading-[48px] tracking-[-0.02em] font-marcellus`
      case 'reg':
        return tw`text-[32px] leading-[40px] `
      case 'sm':
        return tw`text-[24px] leading-[32px] `
      case 'xs':
        return tw`text-[20px] md:leading-[32px] leading-[28px]`
      case '2xs':
        return tw`text-[16px] md:leading-[32px] leading-[28px]`
      default:
        return null
    }
  }}
`
