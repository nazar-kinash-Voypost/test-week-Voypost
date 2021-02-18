import { createMuiTheme } from "@material-ui/core/styles";
const colors = {
  primary: "#6D9B12",
  secondary: "#4285F4",
  backgroundFieldColor: "#EFEFEF",
  activeFieldColor: "#6D9B12",
};

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: { margin: "6px", width: "133px", height: "50px" },
      contained: {
        boxShadow: "none",
      },
      sizeSmall: { width: "120px", height: "40px" },
      sizeLarge: { width: "270px", height: "50px" },
    },
    MuiTextField: {
      root: {
        width: "550px",
        marginTop: "40px",
        caretColor: colors.primary,
      },
    },
    MuiInputBase: {
      input: {
        backgroundColor: colors.backgroundFieldColor,
      },
    },

    MuiTypography: {
      root: {
        padding: "12px",
      },
    },
  },
  typography: {
    h1: {
      fontWeight: 900,
      fontSize: "36px",
    },
    h2: {
      fontWeight: 700,
      fontSize: "32px",
    },
    h3: {
      fontWeight: 500,
      fontSize: "28px",
    },
    h4: {
      fontWeight: 500,
      fontSize: "24px",
    },
    h5: {
      fontWeight: 500,
      fontSize: "18px",
    },
    h6: {
      fontWeight: 700,
      fontSize: "16px",
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: "14px",
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: "14px",
    },
  },

  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
  },
});
export default theme;
