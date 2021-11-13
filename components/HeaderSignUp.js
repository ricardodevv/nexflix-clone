/* @jsxImportSource @emotion/react */
import Link from "@mui/material/Link";
import Image from "next/image";
import logo from "../src/pictures/logo.svg";
import { styled } from "@mui/material/styles";

const HeaderBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  zIndex: 3,
  borderBottom: "1px solid #0000001a",
}));

const Logo = styled("div")(({ theme }) => ({
  width: "10.5rem",
  padding: "1rem 0",
  margin: "0.5rem 0 0 2rem",
}));

const SignIn = styled("div")(({ theme }) => ({
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
        <Link href="/">
          <Image src={logo} objectFit="fill" />
        </Link>
      </Logo>
      <SignIn>
        <Link href="/login">
          <div>Sign in</div>
        </Link>
      </SignIn>
    </HeaderBox>
  );
};

export default HeaderSignUp;
