import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import SearchIcon from "../../public/icons/search.png";
import Image from "next/image";

const SearchInput = ({ setSearchLabel, filterMenu, searchLabel }) => {
  const handleChange = (event) => {
    setSearchLabel(event.target.value);
    filterMenu();
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1, width: "96%" } }}>
      <FormControl variant="standard">
        <Input
          sx={{
            backgroundColor: "#f2f4f6",
            borderRadius: 15,
            paddingRight: 1,
            paddingLeft: 1,
          }}
          fullWidth
          id="search"
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
