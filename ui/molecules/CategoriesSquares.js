import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";
import Bachour from "public/restaurants/bachour.jpg";
import { getMenuCategories } from "utils/dishes";

export default function CategoriesSquares() {
  const categories = getMenuCategories("roca");

  return (
    <ImageList
      sx={{ width: "100%", height: "100%" }}
      cols={3}
      rowHeight={130}
      gap={1}
    >
      {categories.map((item) => (
        <ImageListItem key={item.img} onClick={() => alert(item.category)}>
          <img
            src={`${item.imageUrl.src}?w=164&h=130&fit=crop&auto=format`}
            srcSet={`${item.imageUrl.src}?w=164&h=130&fit=crop&auto=format&dpr=2 2x`}
            alt={item.id}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              height: 20,
              "& .MuiImageListItemBar-title": { fontSize: 14 },
            }}
            title={item.category}
            position="bottom"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
