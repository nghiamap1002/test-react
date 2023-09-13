import { Box } from "@chakra-ui/react";
import { gameLoftLogoBlack, hamburgerIcon } from "assets";
import { FC } from "react";
import { mainColor } from "theme/common/color";

const Header: FC = () => {
  return (
    <Box
      // position="sticky"
      zIndex={999}
      top={0}
      left={0}
      bg={mainColor.secondary}
      display="flex"
      justifyContent="space-between"
      px={16}
    >
      <Box>
        <img src={gameLoftLogoBlack} />{" "}
      </Box>
      <Box display="flex">
        <img src={hamburgerIcon} />
      </Box>
    </Box>
  );
};

export default Header;
