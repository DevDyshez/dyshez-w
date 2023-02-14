import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import Navbar from "ui/molecules/Navbar";
import RestaurantHeader from "ui/molecules/RestaurantHeader";
import Tabs from "ui/molecules/Tabs";
import { promos } from "utils/promo";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

export default function Board() {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "#fff", minHeight: 850 }}>
      <Navbar canBack />
      <Box
        style={{
          backgroundColor: "#fff",
          color: "#000",
          fontFamily: "PoppinsSemiBold",
          fontSize: 14,
          paddingLeft: 10,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        Dyshez Board - Roca Steakhouse
      </Box>
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        cols={3}
        rowHeight={130}
        gap={1}
      >
        {promos?.map((promo) => (
          <ImageListItem
            key={promo.id}
            onClick={() => router.push(`/promo?id=${promo.id}`)}
          >
            <img
              src={`${promo.imageUrl[0].src}?w=164&h=130&fit=crop&auto=format`}
              srcSet={`${promo.imageUrl[0].src}?w=164&h=130&fit=crop&auto=format&dpr=2 2x`}
              alt={promo.id}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
