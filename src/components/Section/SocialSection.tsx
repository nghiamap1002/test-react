import { Box, Image } from "@chakra-ui/react";
import {
  mailBlue,
  mailIcon,
  shareBlack,
  shareIcon,
  supportBlue,
  supportIcon,
} from "assets";
import CircleIcon from "components/CircleIcon";
import { FC } from "react";
import { HiShare } from "react-icons/hi";
import { mainColor } from "theme/theme";

const SocialSection: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="end"
      position="fixed"
      right={{ lg: 10, sm: 4 }}
      zIndex={9999999}
    >
      <Box display="flex" flexDirection="column" mr={4} gap={2}>
        <CircleIcon
          icon={<Image src={shareBlack} />}
          iconHover={<Image src={shareIcon} />}
        />
        <CircleIcon
          bg={mainColor.white}
          icon={<Image src={mailIcon} />}
          iconHover={<Image src={mailBlue} />}
        />
        <CircleIcon
          bg={mainColor.white}
          icon={<Image src={supportIcon} />}
          iconHover={<Image src={supportBlue} />}
        />
      </Box>
    </Box>
  );
};

export default SocialSection;
