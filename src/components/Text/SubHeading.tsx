import { Box, BoxProps, Container } from "@chakra-ui/react";
import { FC } from "react";
import { mainColor } from "theme/theme";

const SubHeading: FC<BoxProps> = ({
  content,
  fontWeight = 400,
  fontSize = "25px",
  lineHeight = "normal",
  color = mainColor.primary,
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
