// components/GlobalStyles.js
import * as React from 'react'
import { Global, css } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const GlobalStyles = (): React.ReactElement => (
  <>
    <BaseStyles />
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

        @tailwind base;
        @tailwind components;
        @tailwind utilities;
      `}
    />
  </>
)

export default GlobalStyles
