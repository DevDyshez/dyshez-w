import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "../../public/icons/search.png";
import Image from "next/image";

const SearchInput = ({ setSearchLabel, filterMenu, searchLabel }) => {
  const handleChange = (event) => {
    setSearchLabel(event.target.value);
    filterMenu();
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <FormControl variant="standard">
        <Input
          sx={{
            backgroundColor: "#fff",
            borderRadius: 15,
            paddingRight: 2,
            paddingLeft: 1,
            height: 38,
            width: 376,
            marginRight: "auto",
            marginLeft: "auto",
            border: "1px solid #DBDBDB",
            ":placeholder": {
              color: "red",
              fontStyle: "italic",
              backgroundColor: "red",
            },
          }}
          fullWidth
          id="search"
          placeholder="Buscar"
          endAdornment={
            <Image src={SearchIcon} width={15} height={15} alt="Search Icon" />
          }
          disableUnderline
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </FormControl>
    </Box>
  );
};

SearchInput.propTypes = {};

export default SearchInput;
