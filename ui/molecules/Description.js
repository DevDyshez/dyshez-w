import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import ListIcon from "../../public/icons/list.png";
import CopyIcon from "../../public/icons/copyfile.png";
import DirectionIcon from "../../public/icons/direction.png";
import PinkClockIcon from "../../public/icons/pinkclock.png";
import PinkPhoneIcon from "../../public/icons/pinkphone.png";
import WebIcon from "../../public/icons/web.png";
import styles from "../../src/styles/Home.module.css";
import Link from "next/link";

const Description = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const text =
    "Con una original combinación entre clásico y lo contemporáneo, ROCA Steakhouse es un inigualable restaurante gourmet en Mérida, Yucatán, ideal para los amantes de los cortes de carne prime.";

  return (
    <Box sx={{ marginTop: 1 }}>
      <Grid container>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={ListIcon} width={20} height={20} alt="List Icon" />
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <Typography
              sx={{
                color: "#333333",
                fontSize: 12,
                fontWeight: "800",
                marginRight: 2,
                fontFamily: "MontserratMedium",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: showFullText ? null : 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {text}
            </Typography>
            {!showFullText && (
              <h1
                style={{
                  position: "absolute",
                  bottom: 2,
                  right: 15,
                  color: "#333333",
                  fontSize: 12,
                  fontWeight: "800",
                  fontFamily: "MontserratMedium",
                }}
                onClick={() => {
                  setShowFullText(!showFullText);
                }}
              >
                Ver mas
              </h1>
            )}
            {showFullText && (
              <h1
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 10,
                  color: "#333333",
                  fontSize: 12,
                  fontWeight: "800",
                  fontFamily: "MontserratMedium",
                }}
                onClick={() => {
                  setShowFullText(!showFullText);
                }}
              >
                Ver menos
              </h1>
            )}
          </div>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: 1 }}>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={DirectionIcon} width={20} height={20} alt="List Icon" />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#333333",
              fontSize: 12,
              fontWeight: "800",
              marginRight: 2,
              fontFamily: "MontserratMedium",
            }}
          >
            Av. Andrés García Lavin, Montebello, Luxury Place, Local-5, Mérida,
            Mexico
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={CopyIcon} width={20} height={24} alt="List Icon" />
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: 1 }}>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={PinkClockIcon} width={20} height={20} alt="List Icon" />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#35B736",
              fontSize: 12,
              fontWeight: "800",
              marginRight: 2,
              fontFamily: "MontserratMedium",
            }}
          >
            Abierto:
          </Typography>
          <Typography
            sx={{
              color: "#333333",
              fontSize: 12,
              fontWeight: "800",
              marginRight: 2,
              fontFamily: "MontserratMedium",
            }}
          >
            13:00 - 23:30
          </Typography>

          <Typography
            sx={{
              color: "#333333",
              fontSize: 16,
              fontWeight: "800",
              marginRight: 2,
              fontFamily: "MontserratMedium",
            }}
            onClick={() => {
              setShowFullSchedule(!showFullSchedule);
            }}
          >
            {showFullSchedule ? "▲" : "▼"}
          </Typography>
        </Grid>
        {showFullSchedule && (
          <Grid
            item
            xs={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#333333",
                fontSize: 12,
                fontWeight: "800",
                marginRight: 2,
                fontFamily: "MontserratMedium",
                textAlign: "left",
              }}
            >
              Lunes: Cerrado. <br></br>
              Martes: 13:00 - 23:30. <br></br>
              Miércoles: 13:00 - 23:30.<br></br>
              Jueves: 13:00 - 02:00. <br></br>
              Viernes: 13:00 - 02:00. <br></br>
              Sábado: 13:00 - 02:00. <br></br>
              Domingo: 13:00 - 22:00.<br></br>
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid container sx={{ marginTop: 1 }}>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={PinkPhoneIcon} width={20} height={20} alt="List Icon" />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#333333",
              fontSize: 12,
              marginRight: 2,
              fontFamily: "MontserratMedium",
            }}
          >
            9999-123-456
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: 1 }}>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={WebIcon} width={20} height={20} alt="List Icon" />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#333333",
              fontSize: 12,
              marginRight: 2,
              fontFamily: "MontserratMedium",
            }}
          >
            Ver página web
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Description;
