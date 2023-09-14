import { Box } from "@chakra-ui/react";
import { downloadIcon, facebookIcon, mountain2, shareBlack } from "assets";
import CircleIcon from "components/CircleIcon";
import { FC } from "react";
import { mainColor } from "theme/theme";

const GameContent: FC = () => {
  return (
    <Box bg={mainColor.third} px={8} py={6}>
      <Box display="flex" justifyContent="end" alignItems="center">
        <Box
          boxShadow="0px 1px 5px 0px rgba(0, 0, 0, 0.15)"
          borderRadius="50%"
          display="flex"
        >
          <img src={downloadIcon} />
        </Box>
      </Box>
      <Box mb={20} display="flex" justifyContent="center" alignItems="start">
        <img src={mountain2} />
      </Box>
    </Box>
  );
};

export default GameContent;
