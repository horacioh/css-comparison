import { globalStyle } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";
import { vars } from "./theme.css";

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