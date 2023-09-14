import { Box } from "@chakra-ui/react";
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
      px={{ md: 16, sm: 6 }}
    >
      <Box ml={-5} width={112}>
        <img src={gameLoftLogoBlack} />
      </Box>
      <Box display="flex">
        <img src={hamburgerIcon} width={32} />
      </Box>
    </Box>
  );
};

export default Header;
