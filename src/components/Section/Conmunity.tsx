import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  facebookIcon,
  instaIcon,
  searchIcon,
  twitterIcon,
} from "assets";
import Post from "components/Card/Post";
import SocialStory from "components/Card/SocialStory";
import Carousel from "components/Carousel";
import Heading from "components/Text/Heading";
import SubHeading from "components/Text/SubHeading";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { mainColor } from "theme/theme";
import { isMobile } from "utils";

const Community: FC = () => {
  const arrayCat = [
    {
      image: cat1,
      title: "Short title",
    },
    {
      image: cat2,
      title: "Short title",
    },
    {
      image: cat3,
      title: "Short title",
    },
    {
      image: cat4,
      title: "Short title",
    },
    {
      image: cat5,
      title: "Short title",
    },
    {
      image: cat6,
      title: "Short title",
    },
  ];

  return (
    <Box color={mainColor.primary} my={12}>
      <Container maxW="container.lg" mb={6}>
        <Box fontWeight={700} mb={4}>
          <Heading
            content="game community hub"
            textTransform="uppercase"
            color={mainColor.primary}
          />
          <SubHeading
            content="Live Game Updates"
            color={mainColor.primary}
            fontWeight={700}
            display={{ sm: "none" }}
          />
        </Box>
        <Box position="relative" px={{ lg: 12 }} mb={8} pl={{ sm: 8 }}>
          <Carousel
            loop
            slidesPerView={isMobile ? 3.8 : 6}
            spaceBetween={isMobile ? 10 : 50}
            arrowLeft
            arrowRight={!isMobile}
          >
            {[...arrayCat, ...arrayCat].map((item, index) => (
              <SwiperSlide key={index}>
                <SocialStory
                  title={item.title}
                  active={index === 0}
                  bgImage={item.image}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </Box>
        <Grid
          alignItems="center"
          templateColumns={{ sm: "", lg: "70% auto" }}
          gap={4}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box fontSize={{ lg: "30px", sm: "20px" }} fontWeight={700}>
              All Posts
            </Box>

            <Box gap={{ sm: 4, lg: 6 }} display="flex" alignItems="center">
              <Image src={twitterIcon} />
              <Image src={instaIcon} />
              <Image src={facebookIcon} />
            </Box>
          </Box>
          <InputGroup size="md">
            <Input
              placeholder="Search"
              _placeholder={{ color: mainColor.primary }}
            />
            <InputRightElement pointerEvents="none">
              <img src={searchIcon} />
            </InputRightElement>
          </InputGroup>
        </Grid>
      </Container>
      <Box position="relative" px={4}>
        {!isMobile && (
          <Carousel
            slidesPerView={5.6}
            spaceBetween={20}
            centeredSlides
            initialSlide={3}
          >
            {arrayCat.map((item, index) => (
              <SwiperSlide key={index}>
                <Post />
              </SwiperSlide>
            ))}
          </Carousel>
        )}
        {isMobile && (
          <Box
            display="flex"
            flexDirection="column"
            gap={6}
            h="98vh"
            overflow="hidden"
          >
            {arrayCat.map((item, index) => (
              <Post key={index} />
            ))}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              px={4}
              display="flex"
              justifyContent="center"
              w="100%"
              h="30%"
              alignItems="end"
              bg={
                "linear-gradient(180deg,rgba(255,255,255,0 ) 0.00%,rgba(255,255,255,0.8 ) 58.58%,#ffffff 100.00%)"
              }
            >
              <Button
                size="lg"
                px={16}
                bg={mainColor.white}
                fontSize="15px"
                color={mainColor.primary}
              >
                More
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Community;
