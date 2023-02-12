import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";
import Bachour from "public/restaurants/bachour.jpg";
import { getMenuCategories } from "utils/dishes";
import styles from "@/styles/Home.module.css";

export default function CategoriesSquares({
  id,
  handleCategorySelect,
  handleChange,
}) {
  const categories = getMenuCategories("roca");

  const handleClick = (category) => {
    handleCategorySelect(category);
    handleChange("click", 2);
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
          <ImageListItemBar
            sx={{
              backgroundColor: "#fff",
              height: 20,
              width: 95,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              bottom: 10,
              "& .MuiImageListItemBar-title": {
                fontSize: 11,
                color: "#000",
                fontFamily: "PoppinsRegular",
              },
              "& .MuiImageListItemBar-titleWrap": {
                padding: 0,
                paddingLeft: 1,
                margin: 0,
              },
            }}
            title={item.category}
            position="bottom"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
