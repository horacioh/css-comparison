import { style } from "@vanilla-extract/css";

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