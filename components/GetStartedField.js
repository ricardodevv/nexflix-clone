/*
 * @jsxImportSource @emotion/react
 */
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Link from "next/link";
import detectClickOnPage from "../utils";

const TextFieldStyled = styled((props) => <form {...props} />)((theme) => ({
  background: "white",
  display: "flex",
  height: "4rem",
  width: "100%",
  // "& .MuiInputBase-root:before, .MuiInputBase-root:after, .MuiInput-root:hover:not(.Mui-disabled):before":
  //   {
  //     border: "none",
  //   },
  // "& .MuiInputBase-root": {
  //   marginTop: "0px",
  // },
  // "& .MuiInputLabel-root": {
  //   margin: "0px 12px",
  // },
}));

const GetStartedButton = styled(Button)(({ theme }) => ({
  fontSize: "1.5rem",
  padding: "0 1rem",
  textTransform: "none",
  backgroundColor: "#e50914",
  borderRadius: 0,
  color: "white",
  "&:hover": {
    transition: "none",
    backgroundColor: "#e50914",
  },
}));

const GetStartedField = () => {
  const [email, setEmail] = useState("");
  const [labelState, setLabelState] = useState(false);

  useEffect(() => {
    document.addEventListener(
      "click",
      detectClickOnPage(setLabelState, labelState)
    );
    return () => document.removeEventListener("click", detectClickOnPage);
  });

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <TextFieldStyled>
      <div
        css={css`
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          label::before {
            content: "Email address";
            position: absolute;
            padding: 0 0.5rem;
            top: 22px;
          }
        `}
      >
        <label htmlFor="email" css={css``}></label>
        <input
          onChange={(e) => handleEmailChange(e)}
          value={email}
          css={css`
            font-size: 1.25rem;
            outline: none;
            border: none;
            width: 100%;
            padding: 0 0.5rem;
            margin: 0;
            height: fit-content;
          `}
        />
      </div>
      <Link href={{ pathname: "/signup/registration", query: "" }}>
        <GetStartedButton>
          <p
            css={css`
              margin: 0;
              padding-right: 5px;
            `}
          >
            Get Started
          </p>
          <ArrowForwardIosIcon />
        </GetStartedButton>
      </Link>
    </TextFieldStyled>
  );
};

export default GetStartedField;
