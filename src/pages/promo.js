import React from "react";
import Navbar from "ui/molecules/Navbar";
import PhotoSlider from "ui/molecules/Slider";
import { useRouter } from "next/router";
import { getPromo } from "utils/promo";
import PromoDescription from "ui/molecules/PromoDescription";

export default function Dish() {
  const router = useRouter();
  const promo = getPromo(router?.query?.id);

  return (
    <div style={{ backgroundColor: "#fff", minHeight: 850 }}>
      <Navbar />
      <PhotoSlider images={promo?.imageUrl} />
      <PromoDescription
        name={promo?.name}
        vigency={promo.vigency}
        firstParagraph={promo.firstParagraph}
        secondParagraph={promo.secondParagraph}
      />
    </div>
  );
}
