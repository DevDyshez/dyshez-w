import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";
import Bachour from "public/restaurants/bachour.jpg";
import { getMenuCategories } from "utils/dishes";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function CategoriesSquares({
  id,
  handleCategorySelect,
  handleChange,
}) {
  const categories = getMenuCategories(process.env.NEXT_PUBLIC_BRAND);
  const router = useRouter();

  const handleClick = (category) => {
    if (category !== "Dyshez Board") {
      handleCategorySelect(category);
      handleChange("click", 2);
    } else {
      router.push("/board");
    }
  };

  return (
    <ImageList
      sx={{ width: "100%", height: "100%", marginTop: "50px" }}
      cols={3}
      rowHeight={130}
      gap={1}
    >
      {categories.map((item) => (
        <ImageListItem
          key={item.name}
          onClick={() => handleClick(item.category)}
        >
          <img
            src={`${item.imageUrl.src}?w=164&h=130&fit=crop&auto=format`}
            srcSet={`${item.imageUrl.src}?w=164&h=130&fit=crop&auto=format&dpr=2 2x`}
            alt={item.id}
            loading="lazy"
          />
          <div
            style={{
              position: "absolute",
              backgroundColor: item.id === "dyshezboard" ? "#d5145a" : "#2D2D2D",
              color: item.id === "dyshezboard" ? "#fff" : "#fff",
              border:
                item.id === "dyshezboard"
                  ? "0.5px solid #AA144A"
                  : "1px solid #EAEAEA",
              bottom: 10,
              left: 0,
              borderTopRightRadius: 25,
              borderBottomRightRadius: 25,
              paddingLeft: 5,
              paddingRight: 10,
              fontSize: 10,
              fontFamily: "PoppinsRegular",
              maxWidth: item.isOneLine ? "85%" : "75%",
            }}
          >
            {item.category}
          </div>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
