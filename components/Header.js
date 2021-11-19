/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logo from "../src/pictures/logo.svg";
import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import SelectLang from "./SelectLang";

const SelectLangStyled = css`
  #selectContainer {
    border: 1px solid white;
    border-radius: 3px;
    width: min-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 0.5rem;
    position: relative;
    color: white;
  }
  p {
    padding: 0 0.5rem;
    margin: 0.5rem 0.2rem;
    width: 3.5rem;
  }

  #MenuItems {
    width: min-content;
    border: 1px gray solid;
    position: absolute;
    background-color: white;

    ul {
      padding: 0;
      margin: 0;
      background-color: gray;
      color: white;
    }

    li {
      list-style: none;
      padding: 0 35.5px;
    }

    li:hover {
      background-color: #0073f7;
      color: white;
      cursor: pointer;
    }
  }
`;

const HeaderBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  zIndex: 3,
}));

const Logo = styled("div")(({ theme }) => ({
  width: "10rem",
  padding: "1rem",
  margin: "1rem 2rem",
}));

const Header = () => {
  return (
    <HeaderBox>
      <Logo id="logo">
        <Image src={logo} objectFit="fill" alt="Home" />
      </Logo>
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
          <SelectLang styles={SelectLangStyled} />
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
    </HeaderBox>
  );
};

export default Header;
