import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { mainColor } from "theme/theme";

const Category: FC<any> = ({ title, active, bgImage }) => {
  return (
    <Box textAlign="center">
      <Box
        borderRadius="50%"
        border={`2px solid  ${active ? mainColor.primary : mainColor.white}`}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={1}
      >
        <Box
          bgImage={bgImage}
          h={24}
          w="100%"
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="auto"
        ></Box>
      </Box>
      <Box>{title}</Box>
    </Box>
  );
};

export default Category;
