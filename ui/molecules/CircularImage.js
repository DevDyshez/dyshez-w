import React from "react";
import NextImage from "next/image";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    objectFit: "cover",
  },
}));

const CircularImage = ({ src, alt }) => {
  const classes = useStyles();
  return (
    <NextImage
      src={src}
      alt={alt}
      width={100}
      height={100}
      className={classes.avatar}
    />
  );
};

export default CircularImage;
