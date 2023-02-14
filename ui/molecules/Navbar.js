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

export default function ButtonAppBar({ canBack }) {
  const router = useRouter();
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FFF", height: 60, justifyContent: "center" }}
      >
        <Toolbar>
          {canBack && (
            <>
              <Image
                src={BackIcon}
                width={30}
                height={30}
                alt="Back Icon"
                style={{
                  position: "absolute",
                  marginTop: "5px",
                  top: "auto",
                  bottom: "auto",
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
                  marginTop: "5px",
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
              paddingTop: "5px",
            }}
          >
            <Image
              src={Logo}
              width={90}
              height={30}
              alt="Logo"
              onClick={() => {
                router.push("/");
              }}
            />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
