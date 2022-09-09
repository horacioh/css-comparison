# CSS Comparison

## Some context

- the only css I don't translate is fonts
- I tried to translate as much as possible the way each css framework approach styling. all feedback is welcome!

## Metrics I will measure

- tooling setup
- ease of use
- DX (intellisense, autocomplete, error handling...)
- bundle result
- any other?

## Projects

- [Original](./projects/original/README.md): CUBE CSS + SASS
- [vanilla-extract](./projects/vanilla-extract/README.md): use just vanilla-extract

## Do you want to compare another tool?

```bash
cd projects
pnpm create vite # choose any framework you like, the less the better!
```

### Some other tools that would be nice to compare:

- [ ] TailwindCSS
- [ ] Stitches
- [ ] plain CSS
- [ ] stylus
- [ ] ITCSS architecture
- [ ] BEM architecture
- any other? please contribute!

## Notes

- CUBE CSS embraces the cascade, so the translation to any CSS-in-JS library (which is more of a component based approach) is painfull!

## TODOS

- [ ] fix peerdep on vanilla-extract vite plugin
