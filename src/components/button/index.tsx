import Link from 'next/link'
import React from 'react'
import tw, { styled } from 'twin.macro'

export enum ButtonType {
  outline = 'outline',
  solid = 'solid',
  white = 'white',
  unstyled = 'unstyled',
  nav = 'nav',
}

type BaseButtonProps = {
  buttonType: ButtonType
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
  className?: string
  iconStyles?: string
}

type LinkButtonProps = BaseButtonProps &
  Omit<
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    'onClick' | 'href'
  > & { to: string; internal?: boolean }

type ButtonButtonProps = BaseButtonProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >

export type ButtonProps = LinkButtonProps | ButtonButtonProps

export const Button = ({
  children,
  icon,
  ...props
}: ButtonProps): React.ReactElement => {
  if ('to' in props) {
    return props.internal ? (
      <Link href={props.to} passHref legacyBehavior>
        <ButtonLinkWrapper href={props.to} {...props}>
          {children}
        </ButtonLinkWrapper>
      </Link>
    ) : (
      <ButtonLinkWrapper href={props.to} {...props}>
        {children}
      </ButtonLinkWrapper>
    )
  } else {
    return <ButtonWrapper {...props}>{children}</ButtonWrapper>
  }
}

const ButtonWrapper = styled.button<BaseButtonProps>`
  ${tw`relative flex flex-row items-center text-center tracking-[0.08em] px-sm`}
  ${({ buttonType }) => {
    switch (buttonType) {
      case 'solid':
        return tw`text-white bg-green hover:bg-hoverGreen active:bg-activeGreen rounded-[4px]`
      case 'white':
        return tw`text-darkGreen bg-white hover:bg-offWhite active:bg-paleGreen rounded-[4px]`
      case 'unstyled':
        return tw``
      case 'nav':
        return tw`hover:bg-darkerGreen hover:bg-opacity-[0.025] w-full h-full justify-center p-sm font-manrope font-medium text-[14px] leading-[24px]`
      default:
        return null
    }
  }}
  ${({ size }) => {
    switch (size) {
      case 'lg':
        return tw`py-[14px] font-manrope font-medium text-[18px] leading-[28px] `
      case 'md':
        return tw`py-[10px] font-manrope font-medium text-[16px] leading-[28px] `
      case 'sm':
        return tw`py-xs font-manrope font-medium text-[14px] leading-[24px] `

      default:
        return null
    }
  }}


  &:disabled {
    ${tw`opacity-50 cursor-not-allowed`}
  }
`

const ButtonLinkWrapper = ButtonWrapper.withComponent('a')
