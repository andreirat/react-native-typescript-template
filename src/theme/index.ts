const lightThemeColors = {
  contentPrimary: '#000000',
  contentSecondary: '#FFFFFF',
  contentTertiary: '#8F8585',
};

const darkThemeColors = {
  contentPrimary: '#000000',
  contentSecondary: '#FFFFFF',
  contentTertiary: '#8F8585',
};

const metrics = {
  screenHorizontalPadding: 20,
  screenVerticalPadding: 20,
  screenBottomPadding: 30,
  screenTopPadding: 10,
};

const fonts = {
  primary: {
    regular: {
      normal: 'Gilroy-Regular',
      italic: 'Gilroy-RegularItalic',
    },
  },
};

const textVariants = {
  TITLE1: {
    fontSize: 46,
    lineHeight: 46,
    fontFamily: fonts.primary.regular.normal,
  },
  TITLE2: {
    fontSize: 40,
    lineHeight: 40,
    fontFamily: fonts.primary.regular.normal,
  },
  CAPTION: {
    fontSize: 12,
    lineHeight: 12,
    fontFamily: fonts.primary.regular.normal,
  },
  DEFAULT: {
    fontSize: 36,
    lineHeight: 36,
    fontFamily: fonts.primary.regular.normal,
  },
};

const shadows = {
  button: {
    shadowColor: 'rgba(149, 173, 254, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 1,
  },
  card: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowColor: 'rgba(143,133,133, 1)',
    shadowRadius: 20,
    elevation: 2,
  },
};

const theme = {
  colors: { light: lightThemeColors, dark: darkThemeColors },
  textVariants,
  shadows,
  metrics,
  fonts,
};

export default theme;
