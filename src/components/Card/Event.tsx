import { Box, Button, Divider } from "@chakra-ui/react";
import { bgBlue, facebookIcon, mountain2, shareBlack } from "assets";
import CircleIcon from "components/CircleIcon";
import Heading from "components/Text/Heading";
import SubHeading from "components/Text/SubHeading";
import Text from "components/Text/Text";
import { FC } from "react";
import { mainColor } from "theme/theme";

const EventCard: FC = () => {
  return (
    <Box
      p={8}
      bgImage={bgBlue}
      borderRadius="lg"
      color={mainColor.white}
      display="flex"
      flexDirection="column"
      gap={4}
      height={500}
    >
      <Box position="absolute" top={5} right={5}>
        <CircleIcon icon={<img src={shareBlack} />} />
      </Box>
      <Heading
        fontSize="35px"
        content="short title here"
        textTransform="uppercase"
        color={mainColor.white}
      />
      <Divider height={0.5} bg={mainColor.white} w={20} />
      <Text
        fontSize="15px"
        color={mainColor.white}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud"
      />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        display="flex"
        justifyContent="center"
        alignItems="end"
        w="100%"
        h="40%"
        bg={"linear-gradient(180.00deg, rgba(0, 0, 0, 0),rgb(0, 0, 0) 100%)"}
        pb={10}
      >
        <Button variant="outline" textTransform="uppercase" w="80%" size="lg">
          Read more
        </Button>
      </Box>
    </Box>
  );
};

export default EventCard;
