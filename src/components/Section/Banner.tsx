import { Box, Container, Grid, Image } from "@chakra-ui/react";
import { microsoft, nintendo, starFullFill, starOutline, steam } from "assets";
import Heading from "components/Text/Heading";
import SubHeading from "components/Text/SubHeading";
import { FC } from "react";
import { mainColor } from "theme/common/color";
import SocialSection from "./SocialSection";

const Banner: FC = () => {
  return (
    <>
      <Box
        color={mainColor.white}
        position="relative"
        bgSize="cover"
        bgPosition="center"
        bgImage={"./bg_banner.png"}
      >
        {/* <Box
          position="absolute"
          top={{ sm: "30%", lg: "50%" }}
          left="50%"
          transform="translate(-50%,-50%)"
        >
          <img src={mountain} alt="mountain" />
        </Box> */}

        <Container
          maxW="container.lg"
          display="flex"
          flexDirection="column"
          justifyContent="end"
          h="85vh"
          py={14}
          px={{ sm: 12 }}
        >
          <Box w={{ xl: "55%" }} lineHeight="normal">
            <Box mb={6}>
              <Heading
                content="gameloft game"
                textTransform="uppercase"
                mb={{ sm: 6 }}
              />
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
            <SubHeading
              fontSize="12px"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Box>
          <SocialSection />
        </Container>
      </Box>
      <Box bg={mainColor.third}>
        <Container
          display="flex"
          justifyContent="space-between"
          flexDirection={{ lg: "row", sm: "column" }}
          maxW="container.lg"
          p={{ sm: 6 }}
        >
          <SubHeading
            mb={4}
            content="Download latest version"
            fontWeight={700}
            color={mainColor.primary}
          />
          <Grid
            templateColumns={{ sm: "repeat(2,1fr)", lg: "auto auto auto" }}
            gap={2}
          >
            <Image src={nintendo} alt="nintendo" w="100%" />
            <Image src={microsoft} alt="nintendo" w="100%" />
            <Image src={steam} alt="nintendo" w="100%" />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
