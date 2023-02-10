import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Image from "next/image";
import Test1 from "public/dishes/roca/quesobrie1.jpg";
import Test2 from "public/dishes/roca/quesobrie2.jpg";
import Test3 from "public/dishes/roca/quesobrie3.jpg";
import Test4 from "public/dishes/roca/quesobrie4.jpg";

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
        <div
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <Image src={Test1} alt="Test 1" height={300} />
        </div>
        <div
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <Image src={Test2} alt="Test 1" height={300} />
        </div>
        <div
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <Image src={Test3} alt="Test 1" height={300} />
        </div>
        <div
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <Image src={Test4} alt="Test 1" height={300} />
        </div>
      </Slider>
    </Box>
  );
}
