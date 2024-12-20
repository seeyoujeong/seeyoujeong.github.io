const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['Newsreader', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      textColor: {
        main: 'rgb(var(--color-text-main) / <alpha-value>)'
      },
      backgroundColor: {
        main: 'rgb(var(--color-bg-main) / <alpha-value>)',
        muted: 'rgb(var(--color-bg-muted) / <alpha-value>)'
      },
      borderColor: {
        main: 'rgb(var(--color-border-main) / <alpha-value>)'
      },
      typography: (theme) => ({
        dante: {
          css: {
            '--tw-prose-body': theme('textColor.main / 100%'),
            '--tw-prose-headings': theme('textColor.main / 100%'),
            '--tw-prose-lead': theme('textColor.main / 100%'),
            '--tw-prose-links': theme('textColor.main / 100%'),
            '--tw-prose-bold': theme('textColor.main / 100%'),
            '--tw-prose-counters': theme('textColor.main / 100%'),
            '--tw-prose-bullets': theme('textColor.main / 100%'),
            '--tw-prose-hr': theme('borderColor.main / 100%'),
            '--tw-prose-quotes': theme('textColor.main / 100%'),
            '--tw-prose-quote-borders': theme('borderColor.main / 100%'),
            '--tw-prose-captions': theme('textColor.main / 100%'),
            '--tw-prose-code': theme('textColor.main / 100%'),
            '--tw-prose-pre-code': theme('colors.zinc.100'),
            '--tw-prose-pre-bg': theme('colors.zinc.800'),
            '--tw-prose-th-borders': theme('borderColor.main / 100%'),
            '--tw-prose-td-borders': theme('borderColor.main / 100%')
          }
        },
        DEFAULT: {
          css: {
            a: {
              fontWeight: 'normal',
              textDecoration: 'underline',
              textDecorationStyle: 'dashed',
              textDecorationThickness: '1px',
              textUnderlineOffset: '2px',
              '&:hover': {
                textDecorationStyle: 'solid'
              }
            },
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: 600
            },
            'ul, ol, li': {
              marginTop: '0.5rem'
            },
            blockquote: {
              fontFamily: theme('fontFamily.serif'),
              // fontSize: '1.3125em',
              fontStyle: 'italic',
              fontWeight: 'normal',
              // lineHeight: 1.4,
              paddingLeft: '1rem',
              quotes: 'none',
              '@media (min-width: theme("screens.sm"))': {
                // fontSize: '1.66667em',
                // lineHeight: 1.3
              }
            },
            'code:not(pre > code)': {
              backgroundColor: 'rgba(135, 131, 120, 0.15)',
              color: '#eb5757',
              padding: '0.2em 0.4em',
              borderRadius: '5px',
              fontSize: '85%',
              fontWeight: 400,
              verticalAlign: '0.05rem',
              '&::before': {
                content: 'none'
              },
              '&::after': {
                content: 'none'
              }
            }
          }
        },
        lg: {
          css: {
            blockquote: {
              paddingLeft: '1rem'
            },
            'ul, ol, li': {
              marginTop: '0.5rem'
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
