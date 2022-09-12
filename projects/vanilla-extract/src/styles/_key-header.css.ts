import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export var keyHeader = style({
  alignItems: 'flex-end',
})

globalStyle(`${keyHeader} > :last-child`, {
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.size[300],
  '@media': {
    'screen and (min-width: 768px)': {
      justifyContent: 'flex-end'
    }
  }
})
globalStyle(`${keyHeader} > *`, {
  flexShrink: 0,
  margin: '0.2rem 0 0 0.2rem'
})