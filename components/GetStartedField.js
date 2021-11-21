/*
 * @jsxImportSource @emotion/react
 */
import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";

const TextFieldStyled = styled.form`
  background: white;
  display: flex;
  height: 4rem;
  width: 100%;
`;

const InputDiv = styled.div`
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
  ${(props) =>
    props.error && props.touched ? "border-bottom: 2px solid yellow" : null}
`;

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
    props.focusEmail
      ? "top: -1rem; transition: 0.2s; font-size: 0.8rem"
      : null};
`;

const EmailInput = styled.input`
  font-size: 1rem;
  outline: none;
  border: none;
  width: 100%;
  padding: 1.25rem 0.5rem;
  margin-top: 5px;
  height: fit-content;
  z-index: 1;
  background-color: transparent;
`;

const GetStartedField = () => {
  const [email, setEmail] = useState("");
  const [focusEmail, setFocusEmail] = useState(false);
  const wrapperRef = useRef(null);
  const router = useRouter();

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "*Email required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => router.push("/signup/registration"),
  });

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  });

  const handleClickOutside = (e) => {
    if (
      e.target.id !== "email" &&
      focusEmail === true &&
      formik.values.email.length === 0
    ) {
      setFocusEmail(!focusEmail);
    }
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const focusEmailInput = (e) => {
    !focusEmail ? setFocusEmail(!focusEmail) : null;
  };
  console.log(focusEmail);

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <TextFieldStyled onSubmit={formik.handleSubmit}>
        <InputDiv error={formik.errors.email} touched={formik.touched.email}>
          <Label htmlFor="email" focusEmail={focusEmail}></Label>
          <EmailInput
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onClick={(e) => focusEmailInput(e)}
            ref={wrapperRef}
          />
        </InputDiv>
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

      {formik.touched.email && formik.errors.email ? (
        <div
          css={css`
            color: yellow;
          `}
        >
          {formik.errors.email}
        </div>
      ) : null}
    </div>
  );
};

export default GetStartedField;
