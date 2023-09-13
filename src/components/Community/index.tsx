import {
  Box,
  Container,
  FormControl,
  Input,
  InputAddon,
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
import Carousel from "components/Carousel";
import Category from "components/Category";
import Post from "components/Post";
import { FC } from "react";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import { mainColor } from "theme/theme";
import { Swiper } from "swiper/react";

const Community: FC = () => {
  const arrayCat = [
    {
      image: cat1,
      title: "short title",
    },
    {
      image: cat2,
      title: "short title",
    },
    {
      image: cat3,
      title: "short title",
    },
    {
      image: cat4,
      title: "short title",
    },
    {
      image: cat5,
      title: "short title",
    },
    {
      image: cat6,
      title: "short title",
    },
    {
      image: cat1,
      title: "short title",
    },
    {
      image: cat2,
      title: "short title",
    },
    {
      image: cat3,
      title: "short title",
    },
    {
      image: cat4,
      title: "short title",
    },
    {
      image: cat5,
      title: "short title",
    },
    {
      image: cat6,
      title: "short title",
    },
  ];

  return (
    <Box color={mainColor.primary} my={12}>
      <Container maxW="container.lg" mb={6}>
        <Box fontWeight={700} mb={4}>
          <Box fontSize="3rem" textTransform="uppercase">
            game community hub
          </Box>
          <Box fontSize="1.5rem">Live Game Updates</Box>
        </Box>
        <Box position="relative" px={12} mb={8}>
          <Carousel slidesPerView={6} spaceBetween={50} customeArrow>
            {arrayCat.map((item, index) => (
              <SwiperSlide key={index}>
                <Category
                  title={item.title}
                  active={index === 0}
                  bgImage={item.image}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box fontSize="2rem" fontWeight={700}>
            All Posts
          </Box>

          <Box display="flex" gap={6} alignItems="center" mb={2}>
            <img src={twitterIcon} />
            <img src={instaIcon} />
            <img src={facebookIcon} />
            <InputGroup size="md">
              <Input
                placeholder="Search"
                _placeholder={{ color: mainColor.primary }}
              />
              <InputRightElement pointerEvents="none">
                <img src={searchIcon} />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
      </Container>
      <Box position="relative">
        <Carousel slidesPerView={5.6} spaceBetween={20} centeredSlides>
          {arrayCat.map((item, index) => (
            <SwiperSlide key={index}>
              <Post />
            </SwiperSlide>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Community;
