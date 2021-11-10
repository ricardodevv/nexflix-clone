/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Link from "@mui/material/Link";
import logo from "../src/pictures/logo.svg";
import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import { styled } from "@mui/material/styles";

const Header = () => {
  const [lang, setLang] = useState("English");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  const LanguageSelect = styled(Select)(({ theme }) => ({
    fontSize: "1rem",
    height: "2.3rem",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "& .MuiSelect-select": {
      padding: "0.4rem",
    },
    "& fieldset": {
      border: "none",
    },
  }));

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        z-index: 3;
      `}
    >
      <div
        css={css`
          width: 10rem;
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
        <div
          css={css`
            border: 1px solid white;
            background-color: black;
            border-radius: 5px;
            display: flex;
            align-items: center;
          `}
        >
          <LanguageIcon sx={{ color: "white", fontSize: "1rem" }} />
          <LanguageSelect
            value={lang}
            onChange={handleChange}
            inputProps={{ "aria-label": "language" }}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Spanish">Spanish</MenuItem>
          </LanguageSelect>
        </div>
        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "#e50914",
            color: "white",
            fontSize: 17,
            ml: 3,
            p: "2px 15px",
            "&:hover": {
              transition: "none",
              backgroundColor: "#e50914",
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
