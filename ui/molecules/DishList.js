import * as React from "react";
import Box from "@mui/material/Box";
import { getMenu } from "utils/dishes";
import Typography from "@mui/material/Typography";
import NextIcon from "public/icons/next.png";
import Image from "next/image";
import ListCard from "./ListCard";
import ScrollableCategories from "./ScrollableCategories";
import ListCards from "./ListCards";

export default function DishList({
  filteredDishes,
  handleCategorySelect,
  categorySelected,
}) {
  return (
    <>
      <Box sx={{ height: 50 }}>
        <ScrollableCategories
          id="roca"
          handleCategorySelect={handleCategorySelect}
          categorySelected={categorySelected}
        />
      </Box>
      {/* <Box sx={{ height: "100%" }}>
        {dishes.map((dish) => {
          return <ListCard item={dish} key={dish.name} />;
        })}
      </Box> */}
      <Box>
        <ListCards id={"roca"} filteredDishes={filteredDishes} />
      </Box>
    </>
  );
}
