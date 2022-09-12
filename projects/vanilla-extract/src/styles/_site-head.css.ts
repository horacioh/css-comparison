import { style } from '@vanilla-extract/css'
import { sprinkles } from './sprinkles.css'

export var siteHead = {
  root: style([sprinkles({
    paddingY: 'small',
    paddingX: 'none',
    backgroundColor: 'tertiary-glare'
  })]),
  inner: style(
    {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  ),
  h1: style([
    sprinkles({
      fontSize: '600'
    }),
    {
      margin: '0.5rem 1rem 0.5rem 0',
    }
  ])
}