import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import ListIcon from "../../public/icons/list.png";
import DirectionIcon from "../../public/icons/direction.png";
import PinkClockIcon from "../../public/icons/pinkclock.png";
import PinkPhoneIcon from "../../public/icons/pinkphone.png";
import WebIcon from "../../public/icons/web.png";
import styles from "../../src/styles/Home.module.css";

const Description = () => {
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
          <Typography
            sx={{
              color: "#000",
              fontSize: 12,
              fontWeight: "800",
              marginRight: 2,
              fontFamily: "PoppinsLight",
            }}
          >
            Con una original combinación entre clásico y lo contemporáneo, ROCA
            Steakhouse es un inigualable restaurante gourmet en Mérida, Yucatán,
            ideal para los amantes de los cortes de carne prime.
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
              color: "#000",
              fontSize: 12,
              fontWeight: "800",
              marginRight: 2,
              fontFamily: "PoppinsLight",
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
          <Image src={ListIcon} width={20} height={20} alt="List Icon" />
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
              color: "#000",
              fontSize: 12,
              fontWeight: "800",
              marginRight: 2,
              fontFamily: "PoppinsLight",
            }}
          >
            Abierto: 13:00 - 02:00
          </Typography>
          <Tooltip
            title="Lunes: Cerrado.
            Martes: 13:00 - 23:30.
            Miércoles: 13:00 - 23:30.
            Jueves: 13:00 - 02:00.
            Viernes: 13:00 - 02:00.
            Sábado: 13:00 - 02:00.
            Domingo: 13:00 - 22:00."
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: 16,
                fontWeight: "800",
                marginRight: 2,
                fontFamily: "MontserratMedium",
              }}
            >
              ▼
            </Typography>
          </Tooltip>
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
              color: "#000",
              fontSize: 12,
              marginRight: 2,
              fontFamily: "PoppinsLight",
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
              color: "#000",
              fontSize: 12,
              marginRight: 2,
              fontFamily: "PoppinsLight",
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
