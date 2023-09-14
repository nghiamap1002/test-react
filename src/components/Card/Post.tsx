import { Box } from "@chakra-ui/react";
import { facebookIcon, mountain2, shareBlack } from "assets";
import CircleIcon from "components/CircleIcon";
import { FC } from "react";
import { mainColor } from "theme/theme";

const Post: FC = () => {
  return (
    <Box
      lineHeight="short"
      fontSize="0.8rem"
      border={`1px solid ${mainColor.primary}`}
      borderRadius="lg"
      p={4}
      bg={mainColor.third}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <img src={facebookIcon} />
        <Box>
          <CircleIcon icon={<img src={shareBlack} />} />
        </Box>
      </Box>
      <Box my={16} display="flex" justifyContent="center" alignItems="center">
        <img src={mountain2} />
      </Box>
      <Box>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </Box>
    </Box>
  );
};

export default Post;
