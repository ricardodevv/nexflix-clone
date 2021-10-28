/* @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import Link from "@mui/material/Link";
import logo from "../src/pictures/logo.svg";
import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [lang, setLang] = useState("English");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        position: relative;
        z-index: 3;
      `}
    >
      <div
        css={css`
          width: 200px;
          padding: 1rem;
          margin: 1rem 2rem;
        `}
      >
        <Link href="/">
          <Image src={logo} objectFit="fill" />
        </Link>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minWidth: "fit-content",
          mr: 4,
        }}
      >
        <Select
          value={lang}
          onChange={handleChange}
          inputProps={{ "aria-label": "language" }}
          sx={{
            bgcolor: "black",
            height: "2.3rem",
            color: "white",
            border: "1px solid white",
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "& .MuiSelect-select": {
              padding: 1,
            },
          }}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
        </Select>
        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "red",
            color: "white",
            fontSize: 17,
            ml: 3,
            p: "2px 15px",
            "&:hover": {
              transition: "none",
              backgroundColor: "red",
            },
          }}
        >
          Sign in
        </Button>
      </Box>
    </div>
  );
};

export default Header;
