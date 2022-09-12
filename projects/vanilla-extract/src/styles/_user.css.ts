import { globalStyle, style } from '@vanilla-extract/css'
import { sprinkles } from './sprinkles.css'
import { vars } from './theme.css'
import { recipe } from '@vanilla-extract/recipes'

export var user = {
  root: style([
    {
      display: 'inline-grid',
      alignItems: 'center',
      gridTemplateColumns: 'max-content 50px',
    },
    sprinkles({
      gap: '300',
    }),
  ]),
  img: style([
    { borderRadius: '100%' }
  ])
}