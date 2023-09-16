import { Box, Container } from "@chakra-ui/react";
import GameContent from "components/Card/GameContent";
import Carousel from "components/Carousel";
import Heading from "components/Text/Heading";
import SubHeading from "components/Text/SubHeading";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { mainColor } from "theme/theme";
import { isMobile } from "utils";

const ExclusiveContent: FC = () => {
  return (
    <Box my={12}>
      <Container maxW="container.lg" my={12} mb={12}>
        <Box color={mainColor.primary}>
          <Heading
            content="Exclusive Game Content"
            mb={2}
            color={mainColor.primary}
          />
          <SubHeading
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            color={mainColor.primary}
          />
        </Box>
      </Container>
      <Box position="relative" mb={20}>
        <Carousel
          slidesPerView={isMobile ? 1.2 : 3}
          spaceBetween={isMobile ? 10 : 50}
          centeredSlides
          initialSlide={2}
        >
          {Array(12)
            .fill(null)
            .map((item, index) => (
              <SwiperSlide key={index}>
                <GameContent />
              </SwiperSlide>
            ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default ExclusiveContent;
