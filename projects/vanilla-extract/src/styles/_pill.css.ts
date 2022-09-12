import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'
import { recipe } from '@vanilla-extract/recipes'

export var pill = recipe({
  base: {
    display: 'inline-block',
    padding: '0.3rem 0.35rem',
    fontSize: vars.size[400],
    textDecoration: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    textAlign: 'center'
  },
  variants: {
    color: {
      tertiary: {
        backgroundColor: vars.colors.tertiary,
        color: "light",
      },
      quaternary: {
        backgroundColor: vars.colors.quaternary,
        color: "light",
      }
    }
  }
})

globalStyle(`${pill}:not([class*='bg-'])`, {
  backgroundColor: vars.colors.grey
})

globalStyle(`[lang*='en'] ${pill}`, {
  textTransform: 'capitalize'
})