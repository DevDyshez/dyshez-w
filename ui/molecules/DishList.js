import * as React from "react";
import Box from "@mui/material/Box";
import { getMenu } from "utils/dishes";
import Typography from "@mui/material/Typography";
import NextIcon from "public/icons/next.png";
import Image from "next/image";
import ListCard from "./ListCard";

export default function DishList() {
  const dishes = getMenu("roca");
  console.log(dishes);

  return (
    <Box sx={{ height: "100%" }}>
      {dishes.map((dish) => {
        return <ListCard item={dish} key={dish.name} />;
      })}
    </Box>
  );
}
