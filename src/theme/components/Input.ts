import { defineStyleConfig } from "@chakra-ui/react";
import { mainColor } from "theme/theme";

export const Input = defineStyleConfig({
  baseStyle: {
    // control: {
    // borderColor: mainColor.primary, // change the border radius of the control
    //   borderWidth: 0.2,
    //   backgroundColor: mainColor.white,
    // },
    field: {
      borderColor: mainColor.primary, // change the border radius of the control
      _placeholder: {
        color: mainColor.primary,
      },
    },
    // control: {
    borderColor: mainColor.primary, // change the border radius of the control
    borderWidth: 0.2,
    //   backgroundColor: mainColor.white,
    // },
  },
});
