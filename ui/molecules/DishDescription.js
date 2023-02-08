import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import KetoIcon from "public/icons/keto.png";
import KCalIcon from "public/icons/kcal.png";
import GlutenFreeIcon from "public/icons/glutenfree.png";
import VeganIcon from "public/icons/vegan.png";
import Image from "next/image";

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
              textAlign: "center",
              color: "#000",
              WebkitLineClamp: 2,
              fontSize: 16,
              fontWeight: 700,
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
              textAlign: "center",
              color: "#000",
              WebkitLineClamp: 2,
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              fontSize: 14,
              margin: 2,
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
            height: 100,
          }}
        >
          <Image src={KCalIcon} width={82} height={82} alt="Keto Icon" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            textAlign: "center",
            height: 100,
          }}
        >
          <Image src={KetoIcon} width={82} height={82} alt="Keto Icon" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            height: 100,
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
              paddingBottom: 2,
            }}
          >
            ${price}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            textAlign: "center",
            height: 100,
          }}
        >
          <Image src={VeganIcon} width={82} height={82} alt="Keto Icon" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            textAlign: "center",
            height: 100,
          }}
        >
          <Image src={GlutenFreeIcon} width={82} height={82} alt="Keto Icon" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            height: 100,
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
              paddingBottom: 2,
            }}
          >
            {callories} kcal
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
