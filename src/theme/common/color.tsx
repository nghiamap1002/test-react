import { Global } from "@emotion/react";

export const mainColor = {
  white: "#FFFFFF",
  primary: "#2699fb",
  secondary: "#A8D6FD",
  third: "#D8EDFF",
  fourth: "#EBF6FF",
  black: "#0C0B0B",
  yellow: "rgb(255, 193, 7)",
};

const Color = () => (
  <Global
    styles={`
    :root {
      --primary: ${mainColor.primary};
      --secondary: ${mainColor.secondary};
      --third: ${mainColor.third};
      --fourth: ${mainColor.fourth};
      --yellow: ${mainColor.yellow};
    }
      `}
  />
);

export default Color;
