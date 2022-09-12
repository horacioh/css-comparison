import { vars } from './theme.css'
import { recipe } from '@vanilla-extract/recipes'
import { flow } from './_flow.css'
import { radius } from './_radius.css'
import { splitter } from './_splitter.css'
import { wrapper } from './_wrapper.css'
import { visuallyHidden } from './_visually-hidden.css'

import { button } from './_button.css'
import { keyHeader } from './_key-header.css'
import { pill } from './_pill.css'
import { siteHead } from './_site-head.css'
import { summary } from './_summary.css'
import { tableGroup } from './_table-group.css'
import { user } from './_user.css'


export {
  flow,
  radius,
  splitter,
  wrapper,
  visuallyHidden,
  button,
  keyHeader,
  pill,
  siteHead,
  summary,
  tableGroup,
  user,
}

export var fontSize = recipe({
  base: {},
  variants: {
    size: {
      300: {
        fontSize: vars.size[300]
      },
      400: {
        fontSize: vars.size[400]
      },
      500: {
        fontSize: vars.size[500]
      },
      600: {
        fontSize: vars.size[600]
      },
      700: {
        fontSize: vars.size[700]
      },
    },
  },
  defaultVariants: {
    size: 400
  }
})

export var color = recipe({
  base: {},
  variants: {
    color: {
      'tertiary-glare': {
        color: vars.colors['tertiary-glare']
      }
    }
  }
})

export var gapTop = recipe({
  base: {},
  variants: {
    size: {
      '700': {
        marginTop: vars.size[700]
      },
      '600': {
        marginTop: vars.size[600]
      }
    }
  }
})