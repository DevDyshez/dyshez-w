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

  const handleClick = (category) => {
    handleCategorySelect(category);
  };

  return (
    <div
      style={{
        overflow: "auto",
        whiteSpace: "nowrap",
        height: 65,
        paddingTop: 9,
        paddingBottom: 5,
        paddingLeft: "6px",
        backgroundColor: "white",
        // hardcoded fixed
        position: "fixed",
        top: "240px",
        left: 0,
        right: 0,
        overflowX: "auto",
        zIndex: 11,
      }}
    >
      {categories.map((item) => {
        return (
          !item.isBoard && (
            <Chip
              key={item.name}
              label={item.category}
              onClick={() => {
                handleClick(item.category);
              }}
              variant={
                item.category === categorySelected ? "outlined" : "filled"
              }
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
                borderRadius: 10,
                opacity: item.category === categorySelected ? 1 : 0.4,
              }}
              sx={{
                fontFamily: "PoppinsSemiBold",
                fontSize: 14,
                height: 39,
                minWidth: "146px",
                marginRight: "3px",
              }}
            />
          )
        );
      })}
    </div>
  );
};

export default ScrollableCategories;
