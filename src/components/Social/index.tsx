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
        <CircleIcon icon={<img src={shareIcon} />} />
        <CircleIcon bg={mainColor.white} icon={<img src={mailIcon} />} />
        <CircleIcon bg={mainColor.white} icon={<img src={supportIcon} />} />
      </Box>
    </Box>
  );
};

export default SocialSection;
