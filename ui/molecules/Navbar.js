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
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function ButtonAppBar() {
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            <Image src={Logo} width={96} height={37} alt="Logo" />
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer()}
          >
            <Image src={Menu} width={20} height={20} alt="Logo" />
          </IconButton>
        </Toolbar>
        <Drawer open={state} anchor="right" onClose={() => toggleDrawer()}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer()}
            onKeyDown={() => toggleDrawer()}
          >
            <List>
              <ListItem>
                <ListItemButton>
                  <Image src={Menu} width={20} height={20} alt="Logo" />
                  <ListItemText>Inicio</ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider sx={{ marginLeft: 2, marginRight: 2 }} />
              <ListItem>
                <ListItemButton>
                  <Image src={Menu} width={20} height={20} alt="Logo" />
                  <ListItemText>Mi Perfil</ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider sx={{ marginLeft: 2, marginRight: 2 }} />
              <ListItem>
                <ListItemButton>
                  <Image src={Menu} width={20} height={20} alt="Logo" />
                  <ListItemText>Buenas</ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider sx={{ marginLeft: 2, marginRight: 2 }} />
              <ListItem>
                <ListItemButton>
                  <Image src={Menu} width={20} height={20} alt="Logo" />
                  <ListItemText>Buenas</ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider sx={{ marginLeft: 2, marginRight: 2 }} />
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
}
