import { Box, BoxProps, Container } from "@chakra-ui/react";
import { FC } from "react";
import { mainColor } from "theme/theme";
import { isMobile } from "utils";

const SubHeading: FC<BoxProps> = ({
  content,
  fontWeight = 400,
  fontSize = isMobile ? "20px" : "25px",
  lineHeight = "normal",
  color = mainColor.white,
  ...other
}) => {
  return (
    <Box
      {...other}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {content}
    </Box>
  );
};

export default SubHeading;
