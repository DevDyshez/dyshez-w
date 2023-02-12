import React from "react";
import PropTypes from "prop-types";
import { getMenu } from "utils/dishes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import NextIcon from "public/icons/next.png";
import Divider from "@mui/material/Divider";

const RenderItem = ({ item }) => {
  return (
    <Box
      sx={{
        marginVertical: 2,
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        component="div"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "#000",
          fontSize: 16,
          marginBottom: 2,
        }}
      >
        {item.name}
      </Typography>
      <Grid container>
        <Grid item xs={10}>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              textAlign: "center",
              color: "#000",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              fontSize: 13,
            }}
          >
            {item.description}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 10,
          }}
        >
          <Image src={NextIcon} alt="Next Icon" height={20} width={20} />
        </Grid>
        <Grid item xs={6} style={{ marginTop: 5 }}>
          <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              color: "#000",
              fontSize: 12,
            }}
          >
            {item.callories} kCal
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "#000",
            fontSize: 12,
            marginTop: 5,
          }}
        >
          ${item.price}
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "#dddddd", marginTop: 2 }} />
    </Box>
  );
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