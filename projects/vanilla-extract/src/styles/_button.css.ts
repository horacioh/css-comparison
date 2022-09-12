import { style } from '@vanilla-extract/css'
import { sprinkles } from './sprinkles.css'
import { vars } from './theme.css'
import { recipe } from '@vanilla-extract/recipes'
import { radius } from './_radius.css'

export var button = recipe({
  base: [radius, {
    font: 'inherit',
    display: 'inline-block',
    lineHeight: '1',
    textDecoration: 'none',
    border: `1px solid ${vars.colors.secondary}`,
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: vars.colors.primary,
      borderColor: vars.colors.primary,
      color: vars.colors.light
    },
    ':focus': {
      outlineOffset: '-0.4rem',
      outline: '1px solid'
    },
    ':active': {
      transform: 'scale(0.95)'
    }
  }, sprinkles({
    backgroundColor: 'secondary',
    paddingX: 'xlarge',
    paddingY: 'medium',
    position: 'relative',
  })],
  variants: {
    type: {
      default: {
        backgroundColor: vars.colors.secondary,
      },
      ghost: [style({
        borderColor: 'currentColor',
        backgroundColor: 'transparent'
      })]
    }
  },
  defaultVariants: {
    type: 'default'
  }
})