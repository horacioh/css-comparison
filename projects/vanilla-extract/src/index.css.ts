import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { vars } from './styles/theme.css'



globalStyle('body', {
  lineHeight: 1.5,
  overflowX: 'hidden',
  paddingBlockEnd: vars.size[600]

  /**@include apply-utility('weight', 'medium'); */
})

globalStyle('h1, h2, h3', {
  lineHeight: 1.2
})

globalStyle('h1', {
  fontSize: vars.size[700]
})

globalStyle('h2, h3', {
  fontSize: vars.size[600]
})

globalStyle('a', {
  color: 'currentColor'
})

globalStyle('table', {
  borderCollapse: 'collapse'
})

globalStyle('th', {
  textAlign: 'left'
})

globalStyle(':focus', {
  outline: '2px dotted',
  outlineOffset: '0.25rem'
})

export var flow = style({})

export const flowSpace = createVar()

globalStyle(`${flow} > * + *`, {
  marginTop: fallbackVar(flowSpace, '1rem')
})