import { Box, Container, Divider, Text } from "@chakra-ui/react";
import {
  microsoft,
  mountain,
  nintendo,
  starFullFill,
  starOutline,
  steam,
} from "assets";
import SocialSection from "components/Social";
import { FC } from "react";
import { mainColor } from "theme/common/color";

const Banner: FC = () => {
  return (
    <>
      <Box bg={mainColor.primary} color={mainColor.white} position="relative">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
        >
          <img src={mountain} />
        </Box>

        <Container
          maxW="container.lg"
          display="flex"
          flexDirection="column"
          justifyContent="end"
          h="85vh"
          py={14}
          overflow="scroll"
        >
          <Box w="55%" lineHeight="normal">
            <Box mb={8}>
              <Text fontSize="5xl" textTransform="uppercase" fontWeight={700}>
                gameloft game
              </Text>
              <Box display="flex" alignItems="center" gap={1} fontSize="11px">
                <Box>Racing / Action </Box>|
                <Box display="flex" gap={1}>
                  {Array(4)
                    .fill(null)
                    .map((ele, index) => (
                      <img src={starFullFill} key={index} />
                    ))}
                  <img src={starOutline} />
                </Box>
              </Box>
            </Box>
            <Box fontSize="1.2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </Box>
          </Box>
          <SocialSection />
        </Container>
      </Box>
      <Box bg={mainColor.third} py={5}>
        <Container
          display="flex"
          justifyContent="space-between"
          maxW="container.lg"
        >
          <Box color={mainColor.primary} fontWeight={700} fontSize="xl">
            Download latest version
          </Box>
          <Box display="flex" gap={2}>
            <img src={nintendo} />
            <img src={microsoft} />
            <img src={steam} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
