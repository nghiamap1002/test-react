import { Box, Container } from "@chakra-ui/react";
import EventCard from "components/Card/Event";
import Carousel from "components/Carousel";
import Heading from "components/Text/Heading";
import SubHeading from "components/Text/SubHeading";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";

const SpecialEvent: FC = () => {
  return (
    <Box my={10}>
      <Container maxW="container.lg" mb={10}>
        <Heading content="Special Events & Promotional" mb={2} />
        <SubHeading
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam"
        />
      </Container>
      <Box position="relative">
        <Carousel
          slidesPerView={5}
          spaceBetween={40}
          centeredSlides
          initialSlide={3}
        >
          {Array(12)
            .fill(null)
            .map((item, index) => (
              <SwiperSlide key={index}>
                <EventCard />
              </SwiperSlide>
            ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default SpecialEvent;
