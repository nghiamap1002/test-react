import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";
import { mainColor } from "theme/theme";

type CircleIconProps = {
  icon: any;
  iconHover: any;
  noBg?: boolean;
} & BoxProps;

const CircleIcon: FC<CircleIconProps> = ({
  icon,
  bg = mainColor.white,
  display = "flex",
  justifyContent = "center",
  alignItems = "center",
  borderRadius = "50%",
  iconHover,
  cursor = "pointer",
  noBg = false,
  ...other
}) => {
  return (
    <Box
      {...other}
      bg={noBg ? "transparent" : bg}
      cursor={cursor}
      display={display}
      justifyContent={justifyContent}
      borderRadius={borderRadius}
      alignItems={alignItems}
      p={noBg ? 0 : 2}
      transition="0.3s all"
      _hover={{
        "& > .icon": { display: "none" },
        "& > .icon-hover": { display: "block" },
        boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box className="icon">{icon}</Box>
      <Box className="icon-hover" display="none">
        {iconHover}
      </Box>
    </Box>
  );
};

export default CircleIcon;
