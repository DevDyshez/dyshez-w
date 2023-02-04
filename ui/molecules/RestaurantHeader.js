import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CircularImage from "./CircularImage";
import NextImage from "next/image";
import BostonsLogo from "../../public/restaurants/bostons.png";
import Typography from "@mui/material/Typography";
import ClockIcon from "../../public/icons/basket.png";
import { getPlace } from "../../utils/places";

const RestaurantHeader = () => {
  const place = getPlace("roca");

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#fff" }}>
      <Grid container sx={{ paddingTop: 2 }}>
        <Grid item xs={5} sx={{ paddingLeft: 5 }}>
          <CircularImage src={place.logoUrl} alt="Logo" />
        </Grid>
        <Grid item xs={7}>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              sx={{
                color: "#000",
                fontSize: 20,
                fontWeight: "800",
                marginRight: 2,
              }}
            >
              {place.name}
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: 12,
                marginRight: 2,
              }}
            >
              {place.schedule}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RestaurantHeader;
