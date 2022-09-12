import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from './theme.css'


export var tableGroup = style({
  border: `1px solid ${vars.colors.grey}`,
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
})

globalStyle(`${tableGroup} h3`, {
  vars: {
    '--flow-space': vars.size[600],
  }
})

globalStyle(`${tableGroup} table`, {
  vars: {
    '--flow-space': '0.2rem',

  },
  width: '100%',
  minWidth: '30rem'
})

globalStyle(`${tableGroup} td, ${tableGroup} h3`, {
  padding: '0.5rem 1rem'
})

globalStyle(`${tableGroup} tr:first-child`, {
  borderTop: `1px solid ${vars.colors.grey}`
})

globalStyle(`${tableGroup} tr:first-child`, {
  borderTop: `1px solid ${vars.colors.grey}`
})

globalStyle(`${tableGroup} tr:nth-child(odd) td`, {
  backgroundColor: vars.colors['light-shade']
})

globalStyle(`${tableGroup} td:nth-child(3)`, {
  textAlign: 'right'
})