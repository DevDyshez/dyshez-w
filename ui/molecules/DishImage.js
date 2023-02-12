import React from "react";
import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";
import Bachour from "public/restaurants/bachour.jpg";
import { getMenu } from "utils/dishes";
import { useRouter } from "next/router";

const RenderItem = ({ item }) => {
  const router = useRouter();

  return (
    <ImageListItem
      key={item.img}
      onClick={() => router.push(`/dish?id=${item.id}`)}
    >
      <img
        src={`${item.imageUrl.src}?w=164&h=170&fit=crop&auto=format`}
        srcSet={`${item.imageUrl.src}?w=164&h=170&fit=crop&auto=format&dpr=2 2x`}
        alt={item.id}
        loading="lazy"
      />
      <ImageListItemBar
        sx={{
          bottom: "10%",
          right: "0",
          left: "5%",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          paddingTop: 2,
          paddingBottom: 3,
          textAlign: "right",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: 20,
          "& .MuiImageListItemBar-title": { fontSize: 14 },
        }}
        title={item.name}
        subtitle={`$${item.price}`}
      />
    </ImageListItem>
  );
};

const DishImage = ({ id, filteredDishes }) => {
  const dishes = getMenu(id);
  console.log(filteredDishes, "buenas");

  return (
    <ImageList
      sx={{ width: "100%", height: "100%" }}
      cols={2}
      rowHeight={170}
      gap={2}
    >
      {filteredDishes.length > 0
        ? filteredDishes.map((dish) => (
            <RenderItem key={dish.name} item={dish} />
          ))
        : dishes.map((dish) => <RenderItem key={dish.name} item={dish} />)}
    </ImageList>
  );
};

DishImage.propTypes = {};

export default DishImage;
