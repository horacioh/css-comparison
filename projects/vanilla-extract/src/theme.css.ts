import { createGlobalTheme } from "@vanilla-extract/css";


export var vars = createGlobalTheme(':root', {
  size: {
    300: '0.8rem',
    400: '1rem',
    500: '1.33rem',
    600: '1.77rem',
    700: '2.4rem',
  },
  colors: {
    'primary': '#231651',
    'secondary': '#ff8484',
    'secondary-shade': '#ff5151',
    'tertiary': '#2c988c',
    'tertiary-glare': '#d6fff6',
    'quaternary': '#2374ab',
    'light': '#fafafa',
    'light-shade': '#eeeeee',
    'grey': '#c4c4c',
  }
})