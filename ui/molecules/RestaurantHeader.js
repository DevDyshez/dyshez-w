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
  const place = getPlace(process.env.NEXT_PUBLIC_BRAND);
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
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                textAlign: "right",
              }}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: 14,
                  marginRight: 2,
                  fontFamily: "PoppinsRegular",
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "14px",
                }}
              >
                {place.schedule}
                <Image
                  height={14}
                  width={14}
                  alt="Clock Icon"
                  src={ClockIcon}
                  style={{ marginLeft: "3px" }}
                />
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              alignItems: "center",
              paddingRight: "14px",
              justifyContent: "flex-end",
            }}
          >
            <Image
              src={LocationIcon}
              height={24}
              width={26}
              alt="Location Image"
              onClick={() =>
                router.push("https://goo.gl/maps/iXVTHcZiJHbsgTam7")
              }
              style={{ marginRight: "25px" }}
            />
            <Image
              src={PlusIcon}
              height={22}
              width={22}
              alt="Plus Image"
              style={{ marginRight: "25px" }}
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            />
            <Image
              src={ReservationIcon}
              height={24}
              width={24}
              style={{ marginRight: "25px" }}
              alt="Reservation Image"
            />
            <Image
              src={HeartIcon}
              height={23}
              width={26}
              alt="Location Image"
            />
          </Box>
        </Grid>
      </Grid>
      {isDescriptionOpen && <Description />}
    </Box>
  );
};

export default RestaurantHeader;
