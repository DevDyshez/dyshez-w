import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import Navbar from "ui/molecules/Navbar";
import RestaurantHeader from "ui/molecules/RestaurantHeader";
import Tabs from "ui/molecules/Tabs";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Navbar />
      <RestaurantHeader />
      <Tabs />
    </div>
  );
}
