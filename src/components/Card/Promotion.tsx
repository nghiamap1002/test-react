import { Box, Button, Divider, Image } from "@chakra-ui/react";
import { bgBlue, facebookIcon, mountain2, shareBlack, shareIcon } from "assets";
import CircleIcon from "components/CircleIcon";
import Heading from "components/Text/Heading";
import SubHeading from "components/Text/SubHeading";
import Text from "components/Text/Text";
import { FC, useState } from "react";
import { mainColor } from "theme/theme";
import { isMobile } from "utils";

const PromotionCard: FC = () => {
  const [hover, sethover] = useState(false);

  const Toggle = () => sethover(!hover);

  const heading = (init = true) => {
    return (
      <Heading
        display={init ? "block" : "none"}
        className="heading"
        fontSize="25px"
        content="short title here"
        textTransform="uppercase"
        color={mainColor.white}
      />
    );
  };

  return (
    <Box
      p={8}
      bgImage={bgBlue}
      borderRadius="lg"
      color={mainColor.white}
      display="flex"
      flexDirection="column"
      gap={4}
      height={isMobile ? 400 : 500}
      transition="0.3s all"
      _hover={{
        transform: "scale(1.1)",
        "& > .child": {
          display: "block",
        },
        "& > .heading": {
          display: "block",
        },
        "& > div > .child": {
          display: "block",
        },
        "& > div > .heading": {
          display: "none",
        },
      }}
      w="100%"
      onMouseEnter={Toggle}
      onMouseLeave={Toggle}
    >
      {heading(false)}
      <Box
        position="absolute"
        top={5}
        right={5}
        className="child"
        display="none"
      >
        <CircleIcon
          icon={<Image src={shareBlack} />}
          iconHover={<Image src={shareIcon} />}
        />
      </Box>

      <Divider
        height={0.5}
        bg={mainColor.white}
        w={20}
        className="child"
        display="none"
      />
      <Text
        display="none"
        className="child"
        fontSize="15px"
        color={mainColor.white}
        fontWeight={400}
        content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
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
        p={6}
      >
        {heading()}

        <Button
          className="child"
          display="none"
          variant="outline"
          textTransform="uppercase"
          w="80%"
          size="lg"
          border="4px"
          fontSize="12px"
        >
          Read more
        </Button>
      </Box>
    </Box>
  );
};

export default PromotionCard;
