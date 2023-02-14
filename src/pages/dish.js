import React from "react";
import Navbar from "ui/molecules/Navbar";
import PhotoSlider from "ui/molecules/Slider";
import { useRouter } from "next/router";
import { getDish } from "utils/dishes";
import DishDescription from "ui/molecules/DishDescription";

export default function Dish() {
  const router = useRouter();
  const dish = getDish(router?.query?.id);

  return (
    <div style={{ backgroundColor: "#fff", minHeight: 850 }}>
      <Navbar canBack />
      <PhotoSlider images={dish?.images} />
      <DishDescription
        name={dish?.name}
        description={dish?.description}
        callories={dish?.callories}
        price={dish?.price}
      />
    </div>
  );
}
