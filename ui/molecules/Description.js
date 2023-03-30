import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import Snackbar from "@mui/material/Snackbar";
import ListIcon from "../../public/icons/list.png";
import CopyIcon from "../../public/icons/copyfile.png";
import DirectionIcon from "../../public/icons/direction.png";
import PinkClockIcon from "../../public/icons/pinkclock.png";
import PinkPhoneIcon from "../../public/icons/pinkphone.png";
import WebIcon from "../../public/icons/web.png";
import styles from "../../src/styles/Home.module.css";
import Link from "@mui/material/Link";
import DownArrow from "../../public/icons/downarrow.png";
import UpArrow from "../../public/icons/uparrow.png";

const Description = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const text =
  "CATRIN 47 es una cocina / cantina muy mexicana, situada en pleno siglo XXI con interpretaciones actuales de los platillos más emblemáticos del país y una mixología que desafía hasta el más intrépido de sus visitantes.";

  const handleSnackbar = () => {
    navigator.clipboard.writeText(
      "Calle 47 #463B, entre 54 y 52, Colonia Centro, Mérida, Mexico"
    );

    setIsOpenSnackbar(true);

    setTimeout(() => {
      setIsOpenSnackbar(false);
    }, 3000);
  };

  return (
    <Box sx={{ marginTop: 1, marginBottom: 1 }}>
      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={2000}
        message="Dirección Copiada"
        sx={{ fontFamily: "MontserratMedium" }}
      />
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
            marginLeft: -1,
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
                  right: 30,
                  color: "#CCCCCC",
                  fontSize: 12,
                  fontWeight: "800",
                  fontFamily: "MontserratMedium",
                }}
                onClick={() => {
                  setShowFullText(!showFullText);
                }}
              >
                más
              </h1>
            )}
            {showFullText && (
              <h1
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 30,
                  color: "#CCCCCC",
                  fontSize: 12,
                  fontWeight: "800",
                  fontFamily: "MontserratMedium",
                }}
                onClick={() => {
                  setShowFullText(!showFullText);
                }}
              >
                menos
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
            marginLeft: -1,
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
          <Image
            src={CopyIcon}
            width={20}
            height={24}
            alt="List Icon"
            onClick={() => handleSnackbar()}
          />
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
            marginLeft: -1,
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

          {showFullSchedule ? (
            <Image
              width={9}
              height={5}
              src={UpArrow}
              alt="Down Arrow"
              onClick={() => {
                setShowFullSchedule(!showFullSchedule);
              }}
            />
          ) : (
            <Image
              width={9}
              height={5}
              src={DownArrow}
              alt="Down Arrow"
              onClick={() => {
                setShowFullSchedule(!showFullSchedule);
              }}
            />
          )}
        </Grid>
        {showFullSchedule && (
          <Grid item xs={12} sx={{ paddingLeft: 7 }}>
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
              <Grid container>
                <Grid item xs={3}>
                  Lunes:
                </Grid>
                <Grid item xs={9}>
                  Cerrado.
                </Grid>
                <Grid item xs={3}>
                  Martes:
                </Grid>
                <Grid item xs={9}>
                  13:00 - 23:30
                </Grid>
                <Grid item xs={3}>
                  Miércoles:
                </Grid>
                <Grid item xs={9}>
                  13:00 - 23:30
                </Grid>
                <Grid item xs={3}>
                  Jueves:
                </Grid>
                <Grid item xs={9}>
                  13:00 - 02:00
                </Grid>
                <Grid item xs={3}>
                  Viernes:
                </Grid>
                <Grid item xs={9}>
                  13:00 - 02:00
                </Grid>
                <Grid item xs={3}>
                  Sábado:
                </Grid>
                <Grid item xs={9}>
                  13:00 - 02:00
                </Grid>
                <Grid item xs={3}>
                  Domingo:
                </Grid>
                <Grid item xs={9}>
                  13:00 - 22:00
                </Grid>
              </Grid>
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
            marginLeft: -1,
          }}
        >
          <Link
            sx={{
              color: "#333333",
              fontSize: 12,
              marginRight: 2,
              fontFamily: "MontserratMedium",
            }}
            href="tel:9995181725"
            underline="none"
          >
            9999-123-456
          </Link>
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
            marginLeft: -1,
          }}
        >
          <Link
            sx={{
              color: "#333333",
              fontSize: 12,
              marginRight: 2,
              fontFamily: "MontserratMedium",
            }}
            href="https://www.catrin47.com/"
            target={"_blank"}
          >
            Ver página web
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Description;
