import { Box, BoxProps, Container } from "@chakra-ui/react";
import { FC } from "react";
import { mainColor } from "theme/theme";

const Text: FC<BoxProps> = ({
  content,
  fontWeight = 500,
  fontSize = "10px",
  lineHeight = "normal",
  ...other
}) => {
  return (
    <Box
      {...other}
      color={mainColor.primary}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {content}
    </Box>
  );
};

export default Text;
