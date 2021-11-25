/*
 * @jsxImportSource @emotion/react
 */
import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import { setEmail } from "./Reducer";
import { useStateValue } from "./StateProvider";
import Formik from "./Formik";
import Input from "./Input";
import * as Yup from "yup";

const TextFieldStyled = styled.form`
  background: white;
  display: flex;
  height: 4.25rem;
  width: 100%;
  position: relative;
`;

const GetStartedButton = styled((props) => <Button {...props}></Button>)(
  () => ({
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
  const [showError, setShowError] = useState(false);
  const router = useRouter();
  const [store, dispatch] = useStateValue();

  const handleGetStartedButton = (e, formikValue) => {
    dispatch(setEmail(formikValue));
    !showError ? setShowError(!showError) : null;
  };

  // GetStartedField style variables

  const containerStyled = css`
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
  `;

  const labelStyled = css`
    position: absolute;
    top: 0rem;
    width: 100%;
    transition: 0.2s;
    color: #525252c7;
    z-index: 2;
  `;

  const inputStyled = css`
    font-size: 1rem;
    outline: none;
    border: none;
    width: 100%;
    padding: 1.5rem 0.5rem;
    height: fit-content;
    z-index: 1;
    background-color: transparent;
  `;

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("*Please enter a correct email address")
            .required("*Email required"),
        })}
        onSubmit={() => {
          router.push("/signup/registration");
        }}
      >
        {(formik) => (
          <div
            css={css`
              margin: 0;
            `}
          >
            <TextFieldStyled onSubmit={formik.handleSubmit}>
              <Input
                containerStyled={containerStyled}
                labelStyled={labelStyled}
                inputStyled={inputStyled}
                formik={formik}
                showError={showError}
              />
              <GetStartedButton
                type="submit"
                onClick={(e) => handleGetStartedButton(e, formik.values.email)}
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
            {formik.touched.email && formik.errors.email ? (
              <div
                css={css`
                  color: #ff9900;
                  position: absolute;
                `}
              >
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        )}
      </Formik>
    </div>
  );
};

export default GetStartedField;
