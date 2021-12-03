/* @jsxImportSource @emotion/react */
import Link from "next/link";
import Image from "next/image";
import logo from "../src/pictures/logo.svg";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";

const HeaderBox = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  zIndex: 3,
  borderBottom: "1px solid #0000001a",
}));

const Logo = styled("div")(() => ({
  width: "10.5rem",
  padding: "1rem 0",
  margin: "0.5rem 0 0 2rem",
  cursor: "pointer",
}));

const SignIn = styled("div")(() => ({
  margin: "0 2em",
  "& a": {
    textDecoration: "none",
    color: "black",
    fontSize: "1.3rem",
    ":hover": {
      textDecoration: "underline",
      textDecorationColor: "black",
      textDecorationThickness: "1px",
    },
  },
}));

const HeaderSignUp = () => {
  return (
    <HeaderBox>
      <Logo>
        <Link href="/" passHref>
          <Image src={logo} objectFit="fill" />
        </Link>
      </Logo>
      <SignIn>
        <Link href="/login" passHref>
          <div
            css={css`
              cursor: pointer;
              :hover {
                text-decoration: underline;
              }
            `}
          >
            <b>Sign in</b>
          </div>
        </Link>
      </SignIn>
    </HeaderBox>
  );
};

export default HeaderSignUp;
