import {
  defineProperties,
  createSprinkles
} from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';

var responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['inline', 'block', 'flex', 'grid', 'inline-block', 'inline-grid'],
    position: ['relative', 'absolute', 'sticky'],
    flexDirection: ['row', 'column'],
    flexWrap: ['wrap', 'nowrap'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between'
    ],
    alignItems: [
      'stretch',
      'flex-start',
      'center',
      'flex-end'
    ],
    fontWeight: {
      default: 'inherit',
      medium: 'medium',
      bold: 'bold'
    },
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    fontSize: vars.size,
    fontFamily: vars.fonts,
    gap: vars.size
    // etc.
  },
  shorthands: {
    padding: [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight'
    ],
    margin: [
      'marginTop',
      'marginBottom',
      'marginLeft',
      'marginRight'
    ],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems']
  }
});

var colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.colors,
    backgroundColor: vars.colors,
    // etc.
  }
});


export var sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];