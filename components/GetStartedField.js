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
import InputField from "./InputField";
import { setEmail } from "./Reducer";
import { useStateValue } from "./StateProvider";

const TextFieldStyled = styled.form`
  background: white;
  display: flex;
  height: 4.25rem;
  width: 100%;
  position: relative;
`;

const GetStartedButton = styled((props) => <Button {...props}></Button>)(
  ({ theme }) => ({
    fontSize: "1.8rem",
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

const GetStartedField = () => {
  const [focusEmail, setFocusEmail] = useState(false);
  const [showError, setShowError] = useState(false);
  const wrapperRef = useRef(null);
  const router = useRouter();
  const [store, dispatch] = useStateValue();

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

  const focusEmailInput = (e) => {
    !focusEmail ? setFocusEmail(!focusEmail) : null;
  };

  const handleGetStartedButton = (e) => {
    dispatch(setEmail(formik.values.email));
    !showError ? setShowError(!showError) : null;
  };

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <TextFieldStyled onSubmit={formik.handleSubmit}>
        <InputField
          htmlFor="email"
          id="email"
          name="email"
          type="email"
          showError={showError}
          error={formik.errors.email}
          touched={formik.touched.email}
          focusEmail={focusEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onClick={(e) => focusEmailInput(e)}
          refe={wrapperRef}
        />
        <GetStartedButton
          type="submit"
          onClick={(e) => handleGetStartedButton(e)}
        >
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

      {formik.touched.email && formik.errors.email && showError ? (
        <div
          css={css`
            color: yellow;
            position: absolute;
          `}
        >
          {formik.errors.email}
        </div>
      ) : null}
    </div>
  );
};

export default GetStartedField;
