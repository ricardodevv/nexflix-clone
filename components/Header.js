/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import Link from "next/link";
import logo from "../src/pictures/logo.svg";
import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import SelectLang from "./SelectLang";
import { useSession, signOut } from "next-auth/react";

const SelectLangStyled = css`
  #selectContainer {
    border: 1px solid #aaa;
    border-radius: 3px;
    width: min-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 0.5rem;
    position: relative;
    color: white;
  }

  #langIcon {
    font-size: 1rem;
  }

  p {
    padding: 0 0.2rem;
    margin: 0.45rem 0rem;
    width: 3.3rem;
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
      padding: 0 26.5px;
    }

    li:hover {
      background-color: #0073f7;
      color: white;
      cursor: pointer;
    }
  }
`;

const HeaderBox = styled("div")(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  zIndex: 3,
}));

const Logo = styled("div")(() => ({
  width: "12.5rem",
  padding: "1rem",
  margin: "1rem 2rem",
}));

const LogoLogin = styled(Logo)(() => ({
  cursor: "pointer",
}));

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return router.route !== "/login" ? (
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
        {!session ? (
          <Link href="/login">
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
          </Link>
        ) : (
          <Button onClick={() => signOut()}>Log out</Button>
        )}
      </Box>
    </HeaderBox>
  ) : (
    <HeaderBox>
      <Link href="/">
        <LogoLogin id="logo">
          <Image src={logo} objectFit="fill" alt="Home" />
        </LogoLogin>
      </Link>
    </HeaderBox>
  );
};

export default Header;
