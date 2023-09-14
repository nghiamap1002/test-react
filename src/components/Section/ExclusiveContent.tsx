import { Box, Container } from "@chakra-ui/react";
import GameContent from "components/Card/GameContent";
import Carousel from "components/Carousel";
import Heading from "components/Text/Heading";
import SubHeading from "components/Text/SubHeading";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { mainColor } from "theme/theme";

const ExclusiveContent: FC = () => {
  return (
    <Box my={28}>
      <Container maxW="container.lg" my={12} mb={12}>
        <Box color={mainColor.primary}>
          <Heading content="Exclusive Game Content" mb={2} />
          <SubHeading
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam"
          />
        </Box>
      </Container>
      <Box position="relative">
        <Carousel slidesPerView={3} spaceBetween={50}>
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
