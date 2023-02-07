import React from "react";
import { getMenuCategories } from "utils/dishes";

const ScrollableCategories = ({
  id,
  handleCategorySelect,
  categorySelected,
}) => {
  const categories = getMenuCategories(id);

  const renderItem = ({ item }) => (
    <div
      style={
        categorySelected !== item.category
          ? { ...styles.button, borderColor: "#000" }
          : { ...styles.button, backgroundColor: "#000" }
      }
      onClick={() => handleCategorySelect(item.category)}
    >
      <p
        style={
          categorySelected !== item.category
            ? styles.text
            : { ...styles.text, color: "#fff" }
        }
      >
        {item.category}
      </p>
    </div>
  );

  return (
    <div style={styles.container}>
      {categories.map((item, index) => renderItem({ item, index }))}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 1,
    margin: "0 5px",
    borderRadius: 10,
    height: 38,
    padding: "0 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },
};

export default ScrollableCategories;
