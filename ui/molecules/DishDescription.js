import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import KetoIcon from "public/icons/keto.png";
import KCalIcon from "public/icons/kcal.png";
import GlutenFreeIcon from "public/icons/glutenfree.png";
import VeganIcon from "public/icons/vegan.png";
import SpicyIcon from "public/icons/spiciest.png";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function DishDescription({
  name,
  description,
  price,
  callories,
  category,
}) {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              textAlign: "left",
              color: "#000",
              WebkitLineClamp: 2,
              fontSize: 16,
              fontWeight: 700,
              fontFamily: "PoppinsSemiBold",
              marginLeft: 4,
            }}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              textAlign: "left",
              color: "#000",
              WebkitLineClamp: 3,
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              fontSize: 13,
              margin: 2,
              marginLeft: 4,
              fontFamily: "MontserratRegular",
            }}
          >
            {description}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: 50,
            display: "flex",
            alignItems: "center",
            paddingRight: "40px",
          }}
        >
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "right",
              color: "#000",
              fontSize: 16,
              fontFamily: "PoppinsMedium",
              height: 50,
              paddingTop: "0",
            }}
          >
            ${price?.toFixed(2)} {category === "Cortes Prime" ? "Oz" : null}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
