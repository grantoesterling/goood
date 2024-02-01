import Section from '@components/section'
import 'twin.macro'
import { Button, ButtonType } from '@components/button'
import { HamburgerButton, HamburgerMenu } from '@components/hamburger-menu'
import React from 'react'
import Image from 'next/image'
import { CaretIcon } from '@components/icons'
import { CategoryItemFragment } from '../../generated/graphql'

const ExpandingMenuItem = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  const [open, setOpen] = React.useState(false)

  const handleMouseEnter = () => {
    setOpen(true)
  }

  const handleMouseLeave = () => {
    setOpen(false)
  }
  return (
    <div tw="relative">
      <Button
        buttonType={ButtonType.unstyled}
        size="sm"
        tw="gap-x-xs justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
        <CaretIcon />
      </Button>
      {open && (
        <div
          tw="absolute bg-offWhite rounded-lg z-30 w-full shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      )}
    </div>
  )
}

const DesktopNav = ({
  categories,
}: {
  categories?: CategoryItemFragment[]
}): React.ReactElement => {
  return (
    <div tw="items-center gap-x-xs hidden lg:flex">
      <ExpandingMenuItem title="OUR PRODUCTS">
        <div tw="flex flex-col">
          {categories?.map((category) => (
            <Button
              key={category.title}
              buttonType={ButtonType.nav}
              to={`/product-category`}
              tw="hover:text-darkerGreen"
            >
              {category.title}
            </Button>
          ))}
        </div>
      </ExpandingMenuItem>
      <Button buttonType={ButtonType.unstyled} size="sm" to={'/resources'}>
        BLOG
      </Button>
      <ExpandingMenuItem title="ABOUT US">
        <div tw="flex flex-col items-center">
          <Button buttonType={ButtonType.nav} to={'/aboutus'}>
            Our Story
          </Button>
          <Button buttonType={ButtonType.nav} to={'/press'}>
            Press
          </Button>
        </div>
      </ExpandingMenuItem>
    </div>
  )
}

export const NavBar = ({
  categories,
}: {
  categories?: CategoryItemFragment[]
}): React.ReactElement => {
  const [hamburgerMenuVisible, setHamburgerMenuVisible] =
    React.useState<boolean>(false)

  const onHamburgerClick = () => {
    setHamburgerMenuVisible(!hamburgerMenuVisible)
  }

  return (
    <>
      {hamburgerMenuVisible ? (
        <HamburgerMenu
          onHamburgerClick={onHamburgerClick}
          categories={categories}
        />
      ) : null}
      <Section tw="bg-offWhite py-[12px] z-30 fixed top-0 h-[64px] w-full">
        <div tw="flex justify-between items-center z-50">
          <Button buttonType={ButtonType.unstyled} size="sm" to={'/'}>
            <div tw="relative h-[28px] w-[173px]">
              <Image
                src="/assets/icons/black-text-green-icon.png"
                fill
                style={{
                  objectFit: 'contain',
                }}
                alt="Fresh Pickle Logo"
                sizes="173px"
              />
            </div>
          </Button>

          <DesktopNav categories={categories} />
          <HamburgerButton onHamburgerClick={onHamburgerClick} />
        </div>
      </Section>
    </>
  )
}
