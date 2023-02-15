import React from "react";
import NextImage from "next/image";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 104,
    height: 104,
    borderRadius: "50%",
    objectFit: "cover",
    border: "1px solid  #D6BCB4",
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
