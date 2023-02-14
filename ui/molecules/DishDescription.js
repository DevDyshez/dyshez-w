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
          xs={4}
          sx={{
            textAlign: "center",
            height: 50,
            paddingTop: 2,
          }}
        >
          <Image src={SpicyIcon} width={26} height={26} alt="Keto Icon" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            textAlign: "center",
            height: 50,
          }}
        >
          <Image src={KetoIcon} width={51} height={51} alt="Keto Icon" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            height: 50,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              color: "#000",
              fontSize: 16,
              fontFamily: "PoppinsMedium",
              height: 50,
              paddingTop: "13px",
            }}
          >
            ${price?.toFixed(2)}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            textAlign: "center",
            height: 50,
          }}
        >
          <Image src={VeganIcon} width={51} height={51} alt="Keto Icon" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            textAlign: "center",
            height: 50,
          }}
        >
          <Image src={GlutenFreeIcon} width={51} height={51} alt="Keto Icon" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            height: 50,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              color: "#666666",
              fontSize: 13,
              fontFamily: "PoppinsMedium",
              height: 50,
              paddingTop: "15px",
            }}
          >
            {callories} kcal
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
