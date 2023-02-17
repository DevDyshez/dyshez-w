import * as React from "react";
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";
import Bachour from "public/restaurants/bachour.jpg";
import { getMenu } from "utils/dishes";
import { useRouter } from "next/router";
import ScrollableCategories from "./ScrollableCategories";
import DishImage from "./DishImage";

export default function DishSquares({
  filteredDishes,
  handleCategorySelect,
  categorySelected,
}) {
  return (
    <>
      <Box
        sx={{
          height: 50,
          marginTop: "50px",
          backgroundColor: "white",
        }}
      >
        <ScrollableCategories
          id="roca"
          handleCategorySelect={handleCategorySelect}
          categorySelected={categorySelected}
        />
      </Box>
      <Box sx={{ paddingTop: "5px" }}>
        <DishImage id={"roca"} filteredDishes={filteredDishes} />
      </Box>
    </>
  );
}
