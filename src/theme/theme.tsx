import { extendTheme } from "@chakra-ui/react";
import { mainColor } from "./common/color";
import {
  Container,
  Checkbox,
  Input,
  FormControl,
  Select,
  Button,
} from "./components";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        lineHeight: "tall",
        background: "#FFFFFF",
        color: "#2D2C3C",
        fontWeight: 400,
        fontFamily: "var(--chakra-fonts-body)",
        fontSize: {
          base: "16px !important",
        },
        width: "100%",
        height: "100%",
      },
      "input:hover": {
        borderColor: "#CFD2D6",
      },
      "*, *::before, *::after": {
        borderColor: "#CFD2D6",
      },
      a: {
        textDecoration: "none",
        // color: mainColor.primary,
      },
      "a:hover": {
        textDecoration: "none !important",
        transition: "0.3s all",
      },
    },
  },
  fonts: {
    heading: "Heading Font Name",
    body: "Montserrat",
    DMSans: "DMSans",
    Rubik: "Rubik",
    Montserrat: "Montserrat",
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1570px",
  },
  components: {
    Container,
    Checkbox,
    Input,
    FormControl,
    Select,
    Button,
  },
  colors: {},
});

export { mainColor };
export default theme;
