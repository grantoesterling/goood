module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
      marcellus: ['Marcellus', 'serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },

    extend: {
      colors: {
        darkGreen: '#2B3C2A',
        activeGreen: '#3C543C',
        hoverGreen: '#496648',
        green: '#567855',
        darkerGreen: '#202c1f',
        lightGreen: '#D1DAC9',
        paleGreen: '#EEF1EE',
        offWhite: '#F5F5F5',
        white: '#FFFFFF',
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
        '2xl': '48px',
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
}
