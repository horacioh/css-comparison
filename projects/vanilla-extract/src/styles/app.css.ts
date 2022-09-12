import { style, globalStyle } from '@vanilla-extract/css'
import { sprinkles } from './sprinkles.css'
import { vars } from './theme.css'
import { recipe } from '@vanilla-extract/recipes'

/** ========== Flow ========== */

export var flow = style({
  vars: {
    '--flow-space': '1rem'
  }
})

globalStyle(`${flow} > * + *`, {
  marginTop: 'var(--flow-space, 1rem)'
})

/** ========== Key header ========== */

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

/** ========== Pill ========== */

export var pill = recipe({
  base: {
    display: 'inline-block',
    padding: '0.3rem 0.35rem',
    fontSize: vars.size[400],
    textDecoration: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    textAlign: 'center'
  },
  variants: {
    color: {
      tertiary: {
        backgroundColor: vars.colors.tertiary,
        color: "light",
      },
      quaternary: {
        backgroundColor: vars.colors.quaternary,
        color: "light",
      }
    }
  }
})

globalStyle(`${pill}:not([class*='bg-'])`, {
  backgroundColor: vars.colors.grey
})

globalStyle(`[lang*='en'] ${pill}`, {
  textTransform: 'capitalize'
})

/** ========== Radius ========== */

export var radius = style({
  borderRadius: '0.5rem'
})

/** ========== Site head ========== */

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

/** ========== Splitter ========== */

export var splitter = sprinkles({
  display: {
    desktop: 'flex'
  }
})

globalStyle(`${splitter} > :last-child`, {
  marginTop: vars.size[500],
  '@media': {
    'screen and (min-width: 768px)': {
      marginTop: 0,
      marginLeft: vars.size[500],
      minWidth: '22rem'
    }
  }
})

globalStyle(`${splitter} > *`, {
  '@media': {
    'screen and (min-width: 768px)': {
      flexGrow: 1
    }
  }
})

/** ========== Summary ========== */

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

/** ========== Table group ========== */

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

/** ========== User ========== */

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

/** ========== Visually hidden ========== */

export var visuallyHidden = style({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 'auto',
  margin: 0,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: 1,
  whiteSpace: 'nowrap'
})

/** ========== comander ========== */

export var wrapper = style([{
  maxWidth: '75rem',
  marginLeft: 'auto',
  marginRight: 'auto',

}, sprinkles({
  paddingY: 'none',
  paddingX: 'large'
})])

/** ========== Font size ========== */

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

/** ========== Color ========== */

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

/** ========== Gap top ========== */

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

/** ========== Button ========== */

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

