import { globalStyle, style } from '@vanilla-extract/css'

export var flow = style({
  vars: {
    '--flow-space': '1rem'
  }
})

globalStyle(`${flow} > * + *`, {
  marginTop: 'var(--flow-space, 1rem)'
})