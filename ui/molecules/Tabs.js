import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NextImage from "next/image";
import BookmarkIcon from "../../public/icons/bookmark-outline.png";
import ListIcon from "../../public/icons/list.png";
import SquaresIcon from "../../public/icons/squares.png";
import TopIcon from "../../public/icons/top.png";
import CategoriesSquares from "./CategoriesSquares";
import DishList from "./DishList";
import DishSquares from "./DishSquares";
import { filterMenu } from "utils/dishes";
import SearchSquares from "./SearchSquares";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const [filteredDishes, setFilteredDishes] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [categorySelected, setCategorySelected] = useState(null);

  const handleCategorySelect = (category) => {
    if (category !== categorySelected) {
      const helper = filterMenu("roca", category);
      setFilteredDishes(helper);
      setIsFiltered(true);
      setCategorySelected(category);
    } else {
      setFilteredDishes([]);
      setIsFiltered(false);
      setCategorySelected(null);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100",
        paddingTop: 19,
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          height: "100%",
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          TabIndicatorProps={{ style: { background: "#434343" } }}
          sx={{ backgroundColor: "#fff", minHeight: "50px" }}
        >
          <Tab
            label={
              <NextImage
                src={BookmarkIcon}
                alt="Icon Bookmark"
                width={20}
                height={20}
              />
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <NextImage
                src={ListIcon}
                alt="Icon List"
                width={20}
                height={20}
              />
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <NextImage
                src={SquaresIcon}
                alt="Icon 1"
                width={20}
                height={20}
              />
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <NextImage src={TopIcon} alt="Icon 1" width={20} height={20} />
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CategoriesSquares
          id={"roca"}
          handleCategorySelect={handleCategorySelect}
          handleChange={handleChange}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DishList
          filteredDishes={filteredDishes}
          handleCategorySelect={handleCategorySelect}
          categorySelected={categorySelected}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DishSquares
          filteredDishes={filteredDishes}
          handleCategorySelect={handleCategorySelect}
          categorySelected={categorySelected}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SearchSquares />
      </TabPanel>
    </Box>
  );
}
