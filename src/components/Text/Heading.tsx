import { Box, BoxProps, Container } from "@chakra-ui/react";
import { FC } from "react";
import { mainColor } from "theme/theme";

const Heading: FC<BoxProps> = ({
  content,
  fontWeight = 700,
  fontSize = "45px",
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

export default Heading;
