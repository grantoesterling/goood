import { Button, ButtonType } from '@components/button'
import { CaretIcon, HamburgerIcon } from '@components/icons'
import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import { CategoryItemFragment } from 'src/generated/graphql'
import 'twin.macro'
type HamburgerButtonProps = {
  onHamburgerClick: () => void
  className?: string
}

export const HamburgerButton = ({
  onHamburgerClick,
  className,
}: HamburgerButtonProps): React.ReactElement => {
  return (
    <Button
      onClick={(event) => {
        onHamburgerClick()
        event.stopPropagation()
      }}
      tw="lg:hidden flex"
      className={className}
      buttonType={ButtonType.unstyled}
      aria-label="Menu button"
    >
      <title>toggle hamburger menu</title>
      <HamburgerIcon />
    </Button>
  )
}

const ExpandingOptions = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  const [open, setOpen] = React.useState(false)
  return (
    <div tw="flex flex-col w-full items-center">
      <Button
        buttonType={ButtonType.unstyled}
        size="lg"
        onClick={() => setOpen(!open)}
        tw="font-extrabold"
      >
        {title}
        <CaretIcon
          tw="ml-xs opacity-100 fill-darkerGreen"
          style={{
            rotate: open ? '0deg' : '270deg',
          }}
        />
      </Button>
      {open && children}
    </div>
  )
}
type HamburgerMenuProps = {
  onHamburgerClick: () => void
  categories?: CategoryItemFragment[]
}

export const HamburgerMenu = ({
  categories,
}: HamburgerMenuProps): React.ReactElement => {
  const hamburgerMenuRef = React.useRef<HTMLDivElement>(null)

  return (
    <Dialog.Root open>
      <Dialog.Portal>
        <Dialog.Overlay tw="w-[100vw] h-[100vh] absolute top-0" />
      </Dialog.Portal>
      <div
        tw="lg:hidden flex flex-col relative top-0 w-full bg-lightGreen h-[100vh] justify-center items-center gap-y-xs z-30"
        ref={hamburgerMenuRef}
      >
        <ExpandingOptions title="OUR PRODUCTS">
          {categories?.map((category) => (
            <Button
              key={category.title}
              buttonType={ButtonType.unstyled}
              size="md"
              to={`/product-category`}
              tw="justify-center"
            >
              {category.title}
            </Button>
          ))}
        </ExpandingOptions>
        <Button
          buttonType={ButtonType.unstyled}
          size="lg"
          to={'/resources'}
          tw="font-extrabold"
        >
          BLOG
        </Button>
        <ExpandingOptions title="ABOUT US">
          <div tw="flex flex-col items-center">
            <Button
              buttonType={ButtonType.unstyled}
              tw="justify-center"
              size="md"
              to={'/aboutus'}
            >
              Our Story
            </Button>
            <Button
              buttonType={ButtonType.unstyled}
              tw="justify-center"
              size="md"
              to={'/press'}
            >
              Press
            </Button>
          </div>
        </ExpandingOptions>
        <ExpandingOptions title="CONTACT">
          <div tw="flex flex-col items-center">
            <Button
              buttonType={ButtonType.unstyled}
              tw="justify-center"
              size="md"
              to={'/customerservice'}
            >
              Customer Service
            </Button>
            <Button
              buttonType={ButtonType.unstyled}
              tw="justify-center"
              size="md"
              to={'/wholesale'}
            >
              Wholesale
            </Button>
            <Button
              buttonType={ButtonType.unstyled}
              tw="justify-center"
              size="md"
              to={'/register'}
            >
              Register
            </Button>
          </div>
        </ExpandingOptions>
      </div>
    </Dialog.Root>
  )
}
