import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export var summary = style({
  backgroundColor: vars.colors.primary,
  padding: `${vars.size[500]} ${vars.size[500]} ${vars.size[600]} ${vars.size[500]}`,
})

globalStyle(`${summary} dt, ${summary} dl,`, {
  vars: {
    '--flow-space': vars.size[700]
  }
})

globalStyle(`${summary} dd`, {
  vars: {
    '--flow-space': vars.size[300]
  }
})