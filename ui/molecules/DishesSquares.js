import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Bachour from "public/restaurants/bachour.jpg";
import Image from "next/image";

export default function BasicGrid() {
  return (
    <Box>
      <Grid container spacing={0} gap={0}>
        {helper.map((dish) => {
          return (
            <Grid key={dish.name} item xs={4}>
              <Image src={dish.src} alt={dish.name} height={130} width="auto" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

const helper = [
  { src: Bachour, name: "Bachour" },
  { src: Bachour, name: "Bachour1" },
  { src: Bachour, name: "Bachour12" },
  { src: Bachour, name: "Bachourq" },
  { src: Bachour, name: "Bachour1w" },
  { src: Bachour, name: "Bachour12w" },
  { src: Bachour, name: "Bachourw" },
  { src: Bachour, name: "Bachour1q" },
  { src: Bachour, name: "Bachour1q2" },
  { src: Bachour, name: "Bachourq" },
  { src: Bachour, name: "Bachourq1" },
  { src: Bachour, name: "Bachourq12" },
];
