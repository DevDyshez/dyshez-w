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
  const categories = getMenuCategories("roca");
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
      sx={{ width: "100%", height: "100%" }}
      cols={3}
      rowHeight={130}
      gap={1}
    >
      {categories.map((item) => (
        <ImageListItem
          key={item.img}
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
              backgroundColor: item.id === "dyshezboard" ? "#d5145a" : "#fff",
              color: item.id === "dyshezboard" ? "#fff" : "#000",
              bottom: 10,
              left: 0,
              borderTopRightRadius: 25,
              borderBottomRightRadius: 25,
              paddingLeft: 10,
              paddingRight: 10,
              fontSize: 13,
              fontFamily: "PoppinsRegular",
              textAlign: "left",
              maxWidth: "85%",
            }}
          >
            {item.category}
          </div>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
