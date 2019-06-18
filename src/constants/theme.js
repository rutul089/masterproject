const colors = {
  accent: "#B8BEC1",
  primary: "#FFF",
  secondary: "#4DA1FF",
  tertiary: "#FFE358",
  black: "#1d262c",
  white: "#FFFFFF",
  gray: "#BDBFC7",
  darkgray: "#A12642",
  gray2: "#D8D8D8",
  gray3: "#F0F0F0",
  gray4: "#F7F8FA",
  blue: "#0074e4",
  caption: "#71828A",
  inactiveColor: "#71828A",
  borderColor: "#E7ECEE",
  red: "#cf1e43"
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  border: 15,
  padding: 20,
  radius: 8,
  iconSize: 25,
  // font sizes
  h1: 20,
  h2: 14,
  h3: 13,
  title: 20,
  header: 24,
  body: 14,
  caption: 12,
  small: 11,
  buttonHeight: 44,
  border: 1
};

const fontFamily = {
  regular: "Poppins-Regular",
  light: "Poppins-Light",
  bold: "Poppins-Bold",
  semiBold: "Poppins-SemiBold",
  medium: "Poppins-Medium"
};

const fonts = {
  h1: {
    fontFamily: fontFamily.semiBold,
    fontSize: sizes.h1,
    fontWeight: "600"
  },
  h2: {
    fontFamily: fontFamily.medium,
    fontSize: sizes.h2
  },
  h3: {
    fontFamily: fontFamily.regular,
    fontSize: sizes.h3,
    fontWeight: "400"
  },
  header: {
    fontFamily: fontFamily.semiBold,
    fontSize: sizes.header
  },
  title: {
    fontFamily: fontFamily.regular,
    fontSize: sizes.title
  },
  body: {
    fontSize: sizes.body
  },
  caption: {
    fontSize: sizes.caption,
    color: colors.caption
  },
  small: {
    fontSize: sizes.small
  },
  buttonStyle: {
    backgroundColor: colors.blue,
    borderRadius: sizes.radius,
    height: sizes.buttonHeight,
    borderWidth: sizes.border,
    borderColor:colors.inactiveColor ,
  }
};
export { colors, sizes, fonts, fontFamily };
