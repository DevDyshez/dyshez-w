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
    !item.isBoard && (
      <ImageListItem
        key={item.img}
        onClick={() => router.push(`/dish?id=${item.id}`)}
      >
        <img
          src={`${item.imageUrl.src}?w=164&h=170&fit=crop&auto=format`}
          srcSet={`${item.imageUrl.src}?w=164&h=170&fit=crop&auto=format&dpr=2 2x`}
          alt={item.id}
          loading="lazy"
          style={{ borderRadius: 3 }}
        />
        <div
          style={{
            position: "absolute",
            backgroundColor: " #2D2D2D",
            bottom: 30,
            right: 0,
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 10,
            fontFamily: "PoppinsRegular",
            textAlign: "right",
          }}
        >
          {item.name}
        </div>
        <div
          style={{
            position: "absolute",
            backgroundColor: " #2D2D2D",
            bottom: 10,
            right: 1,
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 10,
            fontFamily: "PoppinsRegular",
          }}
        >
          ${item.price}
        </div>
      </ImageListItem>
    )
  );
};

const DishImage = ({ id, filteredDishes }) => {
  const dishes = getMenu(id);

  return (
    <ImageList
      sx={{ width: "100%", height: "100%", overflow: "hidden" }}
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
