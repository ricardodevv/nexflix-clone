/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Link from "@mui/material/Link";
import logo from "../src/pictures/logo.svg";
import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LanguageComponent from "./LanguageComponent";

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
            background-color: black;
            border-radius: 5px;
          `}
        >
          <LanguageComponent
            styles={{
              height: "2.3rem",
              color: "white",
              border: "1px solid gray",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
              "& .MuiSelect-select": {
                padding: "0.4rem",
              },
              "& fieldset": {
                border: "none",
              },
              "& div": { display: "flex", alignItems: "center" },
            }}
          />
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
