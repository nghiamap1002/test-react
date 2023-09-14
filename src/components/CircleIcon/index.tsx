import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";
import { mainColor } from "theme/theme";

type CircleIconProps = {
  icon: any;
} & BoxProps;

const CircleIcon: FC<CircleIconProps> = ({
  icon,
  bg = mainColor.white,
  display = "flex",
  justifyContent = "center",
  alignItems = "center",
  borderRadius = "50%",
  ...other
}) => {
  return (
    <Box
      {...other}
      bg={bg}
      display={display}
      justifyContent={justifyContent}
      borderRadius={borderRadius}
      alignItems={alignItems}
      p={2}
    >
      {icon}
    </Box>
  );
};

export default CircleIcon;
