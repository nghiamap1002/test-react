import { Box } from "@chakra-ui/react";
import { nextIcon, preIcon } from "assets";
import { FC, useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper } from "swiper/react";
import { ICarousel } from "./Carousel";

const Carousel: FC<ICarousel> = ({ children, ...rest }) => {
  const { customeArrow } = rest;

  const navigationPrevRef: any = useRef(null);
  const navigationNextRef: any = useRef(null);
  const sliderRef = useRef<any>(null);

  return (
    <>
      <Swiper
        loop={true}
        ref={sliderRef}
        {...rest}
        // {...params}
        navigation={{
          nextEl: navigationNextRef?.current,
          prevEl: navigationPrevRef?.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef?.current;
          swiper.params.navigation.nextEl = navigationNextRef?.current;
        }}
        className="cursor-pointer mySwiper"
        spaceBetween={rest.spaceBetween || 20}
        slidesPerView={rest.slidesPerView || 6}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {children}
      </Swiper>
      {customeArrow && (
        <>
          <Box
            onClick={() => {
              if (!sliderRef?.current) return;
              sliderRef.current?.swiper?.slidePrev();
            }}
            cursor={
              sliderRef?.current?.swiper?.isBeginning
                ? "not-allowed"
                : "pointer"
            }
            position="absolute"
            transform="translateY(-50%)"
            top="45%"
            left={0}
            zIndex={99999}
            borderRadius="50%"
            fontSize="6rem"
          >
            <img src={preIcon} />
          </Box>
          <Box
            onClick={() => {
              if (!sliderRef?.current) return;
              sliderRef.current?.swiper?.slideNext();
            }}
            cursor={
              sliderRef?.current?.swiper?.isEnd ? "pointer" : "not-allowed"
            }
            position="absolute"
            transform="translateY(-50%)"
            top="45%"
            right={0}
            fontSize="4rem"
            zIndex={99999}
          >
            <img src={nextIcon} />
          </Box>
        </>
      )}
    </>
  );
};

export default Carousel;
