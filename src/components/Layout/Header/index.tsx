import { Box, Image } from "@chakra-ui/react";
import { gameLoftLogoBlack, hamburgerIcon } from "assets";
import { FC } from "react";
import { mainColor } from "theme/common/color";

const Header: FC = () => {
  return (
    <Box
      zIndex={999}
      top={0}
      left={0}
      bg={mainColor.secondary}
      display="flex"
      justifyContent="space-between"
      px={{ md: 16, sm: 8 }}
    >
      <Box ml={-5}>
        <Image src={gameLoftLogoBlack} w={{ sm: 112, lg: "auto" }} />
      </Box>
      <Box display="flex">
        <Image src={hamburgerIcon} w={{ sm: 8, lg: "auto" }} />
      </Box>
    </Box>
  );
};

export default Header;
