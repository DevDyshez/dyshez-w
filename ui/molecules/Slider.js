import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Image from "next/image";

export default function PhotoSlider({ images }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Slider {...settings}>
        {images?.map((image) => {
          return (
            <div
              key={image.src}
              style={{ width: "100%", position: "relative" }}
            >
              <Image src={image.src} alt="Test" height={300} width={390} />
            </div>
          );
        })}
      </Slider>
    </Box>
  );
}
