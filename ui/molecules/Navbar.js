import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "../../public/logo-pink.png";
import Menu from "../../public/icons/menu.png";
import Image from "next/image";
import { useRouter } from "next/router";
import BackIcon from "public/icons/back.png";
import RocaLogo from "public/rocasmall.png";
import RestaurantHeader from "./RestaurantHeader";
import Grid from "@mui/material/Grid";

export default function ButtonAppBar({ canBack }) {
  const router = useRouter();
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#FFF",
          justifyContent: "center",
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            height: canBack ? "37px" : null,
            minHeight: canBack ? "37px" : null,
          }}
        >
          <Grid container>
            <Grid item xs={12} style={{ height: "37px" }}>
              {canBack && (
                <>
                  <Image
                    src={BackIcon}
                    width={30}
                    height={30}
                    alt="Back Icon"
                    style={{
                      position: "absolute",
                      marginTop: "10px",
                      marginLeft: "10px",
                    }}
                    onClick={() => router.back()}
                  />

                  <Image
                    src={RocaLogo}
                    width={29}
                    height={29}
                    alt="Roca Logo"
                    style={{
                      position: "absolute",
                      marginTop: "10px",
                      top: "auto",
                      bottom: "auto",
                      left: 50,
                    }}
                    onClick={() => router.back()}
                  />
                </>
              )}

              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: canBack ? "10px" : "10px",
                }}
              >
                <Image
                  src={Logo}
                  width={96}
                  height={28}
                  alt="Logo"
                  onClick={() => {
                    router.push("/");
                  }}
                />
              </Typography>
            </Grid>
            {!canBack && (
              <Grid item xs={12}>
                <RestaurantHeader />
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
