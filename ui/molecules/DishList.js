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
        <ListCards id={"roca"} filteredDishes={filteredDishes} />
      </Box>
    </>
  );
}
