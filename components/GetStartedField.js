/*
 * @jsxImportSource @emotion/react
 */
import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { useFormik } from "formik";
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

const GetStartedButton = styled((props) => <Button {...props}></Button>)(
  ({ theme }) => ({
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
  })
);

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

const EmailInput = styled.input`
  ${(props) => {}}
`;

const GetStartedField = () => {
  const [email, setEmail] = useState("");
  const [focusEmail, setFocusEmail] = useState(false);
  const wrapperRef = useRef(null);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  });

  const handleClickOutside = (e) => {
    if (
      e.target.id !== "inpuuut" &&
      focusEmail === true &&
      email.length === 0
    ) {
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
    <TextFieldStyled onSubmit={formik.handleSubmit}>
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
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          css={css`
            font-size: 1rem;
            outline: none;
            border: none;
            width: 100%;
            padding: 1.25rem 0.5rem;
            margin-top: 5px;
            height: fit-content;
            z-index: 1;
            background-color: transparent;
          `}
          onClick={(e) => focusEmailInput(e)}
          ref={wrapperRef}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <GetStartedButton type="submit">
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
    </TextFieldStyled>
  );
};

export default GetStartedField;
