import React, { useState } from "react";
import { Box } from "@mui/material";
import DishImage from "./DishImage";
import SearchInput from "./SearchInput";
import { getMenu } from "utils/dishes";

const SearchSquares = () => {
  const [filtered, setFiltered] = useState([]);
  const [searchLabel, setSearchLabel] = useState("");

  const dishes = getMenu("roca");

  const filterMenu = () => {
    const helper = dishes.filter((dish) => {
      return dish.name.toLowerCase().includes(searchLabel.toLowerCase());
    });
    if (helper.length) {
      setFiltered(helper);
    }
  };

  return (
    <Box sx={{ paddingTop: "50px" }}>
      <SearchInput
        setSearchLabel={setSearchLabel}
        filterMenu={filterMenu}
        searchLabel={searchLabel}
      />
      <Box>
        <DishImage
          id={"roca"}
          filteredDishes={filtered.length > 0 ? filtered : dishes}
        />
      </Box>
    </Box>
  );
};

export default SearchSquares;
