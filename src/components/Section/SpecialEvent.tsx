import { Box, Container } from "@chakra-ui/react";
import PromotionCard from "components/Card/Promotion";
import Carousel from "components/Carousel";
import Heading from "components/Text/Heading";
import SubHeading from "components/Text/SubHeading";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { mainColor } from "theme/theme";
import { isMobile } from "utils";

const SpecialEvent: FC = () => {
  return (
    <Box my={10} bg={mainColor.third} py={6}>
      <Container maxW="container.lg" mb={10} px={6}>
        <Heading
          content="Special Events & Promotional"
          mb={2}
          color={mainColor.primary}
        />
        <SubHeading
          color={mainColor.primary}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        />
      </Container>
      <Box position="relative" mb={isMobile ? 20 : 0}>
        <Carousel
          autoplay={{
            delay: 3000,
          }}
          pagination
          style={{ padding: "50px 0px 80px 0px" }}
          slidesPerView={isMobile ? 1.35 : 5}
          spaceBetween={isMobile ? 30 : 40}
          centeredSlides
          initialSlide={3}
        >
          {Array(12)
            .fill(null)
            .map((item, index) => (
              <SwiperSlide key={index}>
                <PromotionCard />
              </SwiperSlide>
            ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default SpecialEvent;
