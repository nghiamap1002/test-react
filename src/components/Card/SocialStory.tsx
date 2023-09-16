import { Box, Image, Link } from "@chakra-ui/react";
import Text from "components/Text/Text";
import { FC } from "react";
import { mainColor } from "theme/theme";

const SocialStory: FC<any> = ({ title, active, bgImage }) => {
  return (
    <Box textAlign="center">
      <Link
        borderRadius="50%"
        border={`2px solid  ${active ? mainColor.primary : mainColor.white}`}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={1}
        mb={4}
        target="_blank"
        href="/"
      >
        <Image src={bgImage} w={{ sm: 70, lg: "auto" }} />
      </Link>
      <Text
        fontSize={{ sm: "13px", lg: "18px" }}
        fontWeight={active && 600}
        color={mainColor.primary}
        content={title}
      />
    </Box>
  );
};

export default SocialStory;
