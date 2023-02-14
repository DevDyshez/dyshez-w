import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Image from "next/image";
import PreviousIcon from "public/icons/leftarrow.png";
import NextIcon from "public/icons/rightarrow.png";

export default function PhotoSlider({ images }) {
  var settings = {
    dots: false,
    infinite: true,
    fade: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    appendDots: (dots) => (
      <div
        style={{
          bottom: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <ul
          style={{
            margin: "0",
            padding: "0",
            display: "flex",
            listStyle: "none",
            alignItems: "center",
            color: "red",
          }}
        >
          {dots.map((dot) => (
            <li
              key={dot}
              style={{
                color: "white",
                backgroundColor:
                  dot.props.className === "slick-active"
                    ? "white"
                    : "transparent",
                border: "1px solid #fff",
                borderRadius: 10,
                width: 10,
                height: 10,
              }}
            ></li>
          ))}
        </ul>
      </div>
    ),
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
              <Image src={image.src} alt="Test" height={390} width={390} />
            </div>
          );
        })}
      </Slider>
    </Box>
  );
}

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Image
      onClick={onClick}
      style={{
        color: "#fff",
        cursor: "pointer",
        position: "absolute",
        top: "44%",
        right: 15,
        fontSize: 50,
        zIndex: 10,
      }}
      src={NextIcon}
      height={28}
      width={16}
      alt="Previous Icon"
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Image
      onClick={onClick}
      style={{
        color: "#fff",
        cursor: "pointer",
        position: "absolute",
        top: "44%",
        left: 15,
        fontSize: 50,
        zIndex: 10,
      }}
      src={PreviousIcon}
      height={28}
      width={16}
      alt="Previous Icon"
    />
  );
};
