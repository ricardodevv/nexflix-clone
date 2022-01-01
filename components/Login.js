/*
 * @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import loginbackground from "../src/pictures/loginbackground.jpg";
import Image from "next/image";
import Formik from "../components/Formik";
import SubmitButton from "../components/SubmitButton";
import Input from "../components/Input";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import Layout from "./Layout";

const containerStyled = css`
  flex: 1;
  position: relative;
  display: flex;
  margin: 0.3rem 0;
  align-items: center;
  border: 1px solid gray;
  border-radius: 2px;
`;

const labelStyled = css`
  position: absolute;
  top: -0.2rem;
  width: 100%;
  transition: 0.2s;
  color: white;
  z-index: 2;
`;

const labelTransition = css`
  top: -1.1rem;
  transition: 0.1s;
  font-size: 0.8rem;
  font-weight: 700;
`;

const inputStyled = css`
  font-size: 1rem;
  outline: none;
  border: none;
  width: 100%;
  padding: 1.3rem 0.5rem;
  height: fit-content;
  z-index: 1;
  background-color: #333;
  border-radius: 3px;
`;

const inputError = css`
  border: 1px solid red;
`;

const buttonStyled = {
  fontSize: "1.5rem",
  textTransform: "none",
  backgroundColor: "#e50914",
  borderRadius: 0,
  color: "white",
  marginTop: "2rem",
  "&:hover": {
    transition: "none",
    backgroundColor: "#e50914",
  },
};

const ProviderButton = css`
  background-color: #f7f7f7;
  border: none;
  outline: none;
  border-radius: 2px;
  margin: 7px 0;
  padding: 0.8rem;
  color: #2e2e2e;
  cursor: pointer;
  font-size: smaller;
  text-align: center;
`;

const Login = ({ status, providers }) => {
  const loginUser = async (email, password) => {
    try {
      signIn("google");
    } catch (error) {
      console.log(error);
    }
  };

  if (status === "unauthenticated") {
    return (
      <Layout>
        <div
          css={css`
            background-color: black;
            min-height: 100%;
            margin: 0;
            padding: 0;
            position: relative;
            z-index: 0;
          `}
        >
          <div
            css={css`
              height: 100%;
              min-height: 100vh;
              overflow: hidden;
              display: block;
              position: absolute;
              width: 100%;
              z-index: -1;
              opacity: 0.5;
            `}
          >
            <Image
              src={loginbackground}
              alt="background cover"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            css={css`
              display: flex;
              min-height: 100vh;
            `}
          >
            <div
              css={css`
                margin: 6rem auto;
                background-color: rgba(0, 0, 0, 0.75);
                padding: 2rem 4rem;
                width: 27rem;
              `}
            >
              <div
                css={css`
                  width: 100%;
                `}
              >
                <p
                  css={css`
                    color: white;
                    font-size: 2rem;
                    padding: 1rem 0;
                  `}
                >
                  Login
                </p>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("*Please enter a correct email address")
                      .required("*Email required"),
                    password: Yup.string()
                      .required("*Password required")
                      .min(
                        8,
                        "*Password should be minimun 8 characters length"
                      ),
                  })}
                  onSubmit={(values) => {
                    loginUser(values.email, values.password);
                  }}
                >
                  {(formik) => (
                    <form
                      onSubmit={formik.handleSubmit}
                      css={css`
                        display: flex;
                        flex-direction: column;
                      `}
                    >
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        labelContent="Email"
                        labelTransition={labelTransition}
                        containerStyled={containerStyled}
                        inputStyled={inputStyled}
                        inputError={inputError}
                        labelStyled={labelStyled}
                        formikValue={formik.values.email}
                        formikErrors={formik.errors.email}
                        formikTouched={formik.touched.email}
                        formikOnChange={formik.handleChange}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div
                          css={css`
                            color: #ff9900;
                          `}
                        >
                          {formik.errors.email}
                        </div>
                      ) : null}
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        labelContent="Add a password"
                        labelTransition={labelTransition}
                        containerStyled={containerStyled}
                        inputStyled={inputStyled}
                        inputError={inputError}
                        labelStyled={labelStyled}
                        formikValue={formik.values.password}
                        formikErrors={formik.errors.password}
                        formikTouched={formik.touched.password}
                        formikOnChange={formik.handleChange}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div
                          css={css`
                            color: #ff9900;
                          `}
                        >
                          {formik.errors.password}
                        </div>
                      ) : null}
                      <div css={ProviderButton} onClick={() => loginUser()}>
                        <b>Sign in with {providers.google.name}</b>
                      </div>
                      <SubmitButton type="submit" buttonStyled={buttonStyled}>
                        Sign in
                      </SubmitButton>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else {
    return null;
  }
};

export default Login;