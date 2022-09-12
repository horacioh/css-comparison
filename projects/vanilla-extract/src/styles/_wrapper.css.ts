import { globalStyle, style } from '@vanilla-extract/css'
import { sprinkles } from './sprinkles.css'
import { recipe } from '@vanilla-extract/recipes'

export var wrapper = style([{
  maxWidth: '75rem',
  marginLeft: 'auto',
  marginRight: 'auto',

}, sprinkles({
  paddingY: 'none',
  paddingX: 'large'
})])