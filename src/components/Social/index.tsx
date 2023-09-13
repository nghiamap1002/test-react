import { Box } from "@chakra-ui/react";
import { mailIcon, shareIcon, supportIcon } from "assets";
import CircleIcon from "components/CircleIcon";
import { FC } from "react";
import { mainColor } from "theme/theme";
const SocialSection: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="end"
      position="fixed"
      right={10}
      zIndex={9999999}
    >
      <Box display="flex" flexDirection="column" mr={4} gap={2}>
        <CircleIcon>
          <img src={shareIcon} />
        </CircleIcon>
        <CircleIcon bg={mainColor.white}>
          <img src={mailIcon} />
        </CircleIcon>
        <CircleIcon bg={mainColor.white}>
          <img src={supportIcon} />
        </CircleIcon>
      </Box>
    </Box>
  );
};

export default SocialSection;
