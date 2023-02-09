import React from "react";
import PropTypes from "prop-types";
import { getMenu } from "utils/dishes";

const RenderItem = ({ item }) => {
  return <div style={{ color: "red" }}>{item.name}</div>;
};

const ListCards = ({ id, filteredDishes }) => {
  const dishes = getMenu(id);

  return (
    <>
      {filteredDishes.length > 0
        ? filteredDishes.map((dish) => (
            <RenderItem key={dish.name} item={dish} />
          ))
        : dishes.map((dish) => <RenderItem key={dish.name} item={dish} />)}
    </>
  );
};

ListCards.propTypes = {};

export default ListCards;
