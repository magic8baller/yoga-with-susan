const colors = {
  gray100: '#f5f5f5',
  gray200: '#ece8ef',
  gray300: '#dbd5e0',
  gray400: '#bdb5c3',
  gray500: '#978e9e',
  gray600: '#776d7f',
  gray700: '#685d71',
  gray800: '#463652',
  gray900: '#1e0d2b',
  purple100: '#fcecff',
  purple200: '#f9d6ff',
  purple300: '#eeb2f9',
  purple400: '#eb7dff',
  purple500: '#d73df3',
  purple600: '#c700eb',
  purple700: '#b200d1',
  purple800: '#820099',
  purple900: '#5c016c',
  red100: '#ffe9e9',
  red200: '#fec3c3',
  red300: '#f99e9e',
  red400: '#f36f6f',
  red500: '#f65858',
  red600: '#f63131',
  red700: '#e02121',
  red800: '#b81111',
  red900: '#860505',
  white: '#ffffff'
}
export default {
  ...colors,
  darkest: colors.gray900,
  lightest: colors.white,
  lightestTransparent: 'rgba(255, 255, 255, 0)',
  lightestAlpha: 'rgba(255, 255, 255, 0.97)',
  primary: colors.purple600,
  primaryDark: colors.purple700,
  heading: colors.gray900,
  text: colors.gray700,
  textLight: colors.gray600,
  textDark: colors.gray800,
  gray: colors.gray600,
  grayLightest: colors.gray100,
  grayAlpha: 'rgba(214, 209, 230, 0.5)',
  grayAlphaExtra: 'rgba(214, 209, 230, 0.25)',
  warning: colors.red700,
  textWarning: colors.red900,
  warningBackground: colors.red100
}