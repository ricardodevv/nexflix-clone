/*
 * @jsxImportSource @emotion/react
 */
import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Link from "next/link";
import detectClickOnPage from "../utils";

const TextFieldStyled = styled((props) => <form {...props} />)((theme) => ({
  background: "white",
  display: "flex",
  height: "4rem",
  width: "100%",
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

const Label = styled.label`
  position: absolute;
  top: 0rem;
  width: 100%;
  transition: 0.2s;
  color: #525252;
  ${(props) =>
    props.focusEmail === true
      ? "top: -1rem; transition: 0.2s; font-size: 0.8rem"
      : null};
`;

const GetStartedField = () => {
  const [email, setEmail] = useState("");
  const [focusEmail, setFocusEmail] = useState(false);
  const wrapperRef = useRef(null);

  console.log(focusEmail);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (e.target.id !== "inpuuut" && focusEmail === true) {
      setFocusEmail(!focusEmail);
    }
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const focusEmailInput = (e) => {
    e.preventDefault();
    focusEmail === false ? setFocusEmail(!focusEmail) : null;
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
        <Label htmlFor="email" focusEmail={focusEmail}></Label>
        <input
          onChange={(e) => handleEmailChange(e)}
          value={email}
          id="inpuuut"
          css={css`
            font-size: 1.25rem;
            outline: none;
            border: none;
            width: 100%;
            padding: 1.25rem 0.5rem;
            margin: 0;
            height: fit-content;
            z-index: 1;
            background-color: transparent;
          `}
          onClick={(e) => focusEmailInput(e)}
          ref={wrapperRef}
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
