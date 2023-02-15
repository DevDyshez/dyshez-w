import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CircularImage from "./CircularImage";
import BostonsLogo from "../../public/restaurants/bostons.png";
import Typography from "@mui/material/Typography";
import { getPlace } from "../../utils/places";
import styles from "../../src/styles/Home.module.css";
import Image from "next/image";
import LocationIcon from "../../public/icons/location.png";
import PlusIcon from "../../public/icons/plus.png";
import ReservationIcon from "../../public/icons/reservation.png";
import HeartIcon from "../../public/icons/newheart.png";
import { useRouter } from "next/router";
import Description from "./Description";
import ClockIcon from "public/icons/clock.png";

const RestaurantHeader = () => {
  const place = getPlace("roca");
  const router = useRouter();

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#fff" }}>
      <Grid container sx={{ paddingTop: "10px" }}>
        <Grid item xs={5} sx={{ paddingLeft: "20px" }}>
          <CircularImage src={place.logoUrl} alt="Logo" />
        </Grid>
        <Grid item xs={7}>
          <Box
            sx={{
              alignItems: "center",
              textAlign: "right",
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: 20,
                fontWeight: "800",
                marginRight: 2,
                marginTop: "10px",
                fontFamily: "MontserratBold",
              }}
            >
              {place.name}
            </Typography>
            <Box
              style={{
                alignItems: "center",
                textAlign: "right",
              }}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: 14,
                  marginRight: 2,
                  fontFamily: "PoppinsRegular",
                }}
              >
                {place.schedule}
                <Image
                  height={10}
                  width={10}
                  alt="Clock Icon"
                  src={ClockIcon}
                  style={{ marginLeft: 2 }}
                />
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: 1 }}>
            <Grid container>
              <Grid item xs={4} />
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Image
                  src={LocationIcon}
                  height={20}
                  width={20}
                  alt="Location Image"
                  onClick={() =>
                    router.push("https://goo.gl/maps/iXVTHcZiJHbsgTam7")
                  }
                />
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              >
                <Image
                  src={PlusIcon}
                  height={20}
                  width={20}
                  alt="Location Image"
                />
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Image
                  src={ReservationIcon}
                  height={20}
                  width={20}
                  alt="Reservation Image"
                />
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Image
                  src={HeartIcon}
                  height={20}
                  width={20}
                  alt="Location Image"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {isDescriptionOpen && <Description />}
    </Box>
  );
};

export default RestaurantHeader;
