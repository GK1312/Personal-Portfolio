// vuetify.options.js
const colorsDark = {
  primary: '#e5ffda',
  info: '#e76f26',
  secondary: '#a5d9fe',
  accent: '#f8d0ce',
  background: '#fafafa',
  logocolor: '#121212',
}
const colorsLight = {
  primary: '#f36c21',
  info: '#e76f26',
  secondary: '#a5d9fe',
  accent: '#f8d0ce',
  logocolor: '#121212',
  background: '#ffffff',
}
export default {
  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: {
      dark: colorsDark,
      light: colorsLight,
    },
  },
}
