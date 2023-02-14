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

export default function PromoDescription({
  name,
  vigency,
  firstParagraph,
  secondParagraph,
}) {
  return (
    <Box sx={{ marginTop: 5 }}>
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
              marginLeft: 2,
            }}
          >
            {name}
          </Typography>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              textAlign: "left",
              color: "#999999",
              WebkitLineClamp: 2,
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "MontserratMedium",
              marginLeft: 2,
            }}
          >
            {vigency}
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
              fontFamily: "MontserratRegular",
            }}
          >
            {firstParagraph}
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
              fontFamily: "MontserratMedium",
            }}
          >
            {secondParagraph}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
