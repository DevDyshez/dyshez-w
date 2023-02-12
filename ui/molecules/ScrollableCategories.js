import React from "react";
import { getMenuCategories } from "utils/dishes";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { filterMenu } from "utils/dishes";
import styles from "@/styles/Home.module.css";

const ScrollableCategories = ({
  id,
  handleCategorySelect,
  categorySelected,
}) => {
  const categories = getMenuCategories(id);
  return (
    <div
      style={{
        overflow: "auto",
        whiteSpace: "nowrap",
        height: 55,
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      {categories.map((item) => {
        return (
          <Chip
            key={item.name}
            label={item.category}
            onClick={() => {
              handleCategorySelect(item.category);
            }}
            variant={item.category === categorySelected ? "outlined" : "filled"}
            sx={{
              fontFamily: "PoppinsSemiBold",
              fontSize: 12,
              height: 39,
              marginRight: 1,
            }}
          />
        );
      })}
    </div>
  );
};

export default ScrollableCategories;
