import { defineStyleConfig } from "@chakra-ui/react";
import { mainColor } from "theme/theme";

export const Button = defineStyleConfig({
  baseStyle: {
    borderColor: mainColor.primary, // change the border radius of the control
    borderWidth: 0.2,
    _hover: {
      color: mainColor.white,
      borderColor: mainColor.primary, // change the border radius of the control
      background: mainColor.primary,
      backgroundColor: mainColor.primary,
      // borderColor: mainColor.primary,
      // backgroundColor: mainColor.primary,
      // background: mainColor.primary,
      // bg: mainColor.primary,
    },
  },
});
