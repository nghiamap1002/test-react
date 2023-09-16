import { Box, Image } from "@chakra-ui/react";
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
  const { arrowLeft, arrowRight, pagination } = rest;

  const navigationPrevRef: any = useRef(null);
  const navigationNextRef: any = useRef(null);
  const sliderRef = useRef<any>(null);

  const returnIndex = (index: number) => {
    return index < 10 ? (index === 0 ? 0 : `0${index}`) : index;
  };

  return (
    <>
      <Swiper
        ref={sliderRef}
        {...rest}
        // {...params}
        navigation={{
          nextEl: navigationNextRef?.current,
          prevEl: navigationPrevRef?.current,
        }}
        pagination={
          pagination && {
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                '">' +
                '<div class="content">' +
                returnIndex(index) +
                "</div>" +
                "</span>"
              );
            },
          }
        }
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
      {arrowLeft && (
        <Box
          onClick={() => {
            if (!sliderRef?.current) return;
            sliderRef.current?.swiper?.slidePrev();
          }}
          cursor={
            sliderRef?.current?.swiper?.isBeginning ? "pointer" : "not-allowed"
          }
          position="absolute"
          transform="translateY(-50%)"
          top="40%"
          left={0}
          zIndex={99999}
          borderRadius="50%"
        >
          <Image src={preIcon} w={{ lg: "auto", sm: 4 }} />
        </Box>
      )}
      {arrowRight && (
        <Box
          onClick={() => {
            if (!sliderRef?.current) return;
            sliderRef.current?.swiper?.slideNext();
          }}
          cursor={sliderRef?.current?.swiper?.isEnd ? "not-allowed" : "pointer"}
          position="absolute"
          transform="translateY(-50%)"
          top="40%"
          right={0}
          zIndex={99999}
        >
          <Image src={nextIcon} w={{ lg: "auto", sm: 4 }} />
        </Box>
      )}
    </>
  );
};

export default Carousel;
