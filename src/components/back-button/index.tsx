import { CaretIcon } from '@components/icons'
import 'twin.macro'
import { AnimatePresence, motion } from 'framer-motion'
import { BodyText } from '@components/body-text'
import React from 'react'
import { Button, ButtonType } from '@components/button'
export const BackButton = ({
  className,
  text,
  to,
}: {
  className?: string
  text?: string
  to: string
}): React.ReactElement => {
  const [opacity, setOpacity] = React.useState<number>(0)
  return (
    <AnimatePresence initial={false}>
      <Button
        className={className}
        to={to}
        buttonType={ButtonType.unstyled}
        onMouseEnter={() => setOpacity(0.8)}
        onMouseLeave={() => setOpacity(0)}
      >
        <CaretIcon tw="rotate-90 w-sm h-sm" />
        <motion.div
          animate={{ opacity: opacity, x: opacity ? 0 : -15 }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        >
          <BodyText tw="text-black" size="reg">
            {text ? text : 'back'}
          </BodyText>
        </motion.div>
      </Button>
    </AnimatePresence>
  )
}
