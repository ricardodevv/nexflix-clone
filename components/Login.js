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
import Layout from "./Layout";
import { useStateValue } from "./StateProvider";
import { setUser } from "./Reducer";
import {
  buttonStyled,
  containerStyled,
  ImageContainer,
  inputError,
  inputStyled,
  labelStyled,
  labelTransition,
  LoginContainer,
  MainContainer,
  FormContainer,
} from "../styles/login";

const Login = ({ status }) => {
  const [store, dispatch] = useStateValue();

  const loginUser = async (email, password) => {
    try {
      dispatch(setUser(email));
    } catch (error) {
      console.log(error);
    }
  };

  if (store.user.length === 0) {
    return (
      <Layout>
        <MainContainer>
          <ImageContainer>
            <Image
              src={loginbackground}
              alt="background cover"
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
          <LoginContainer>
            <FormContainer>
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
                      <SubmitButton type="submit" buttonStyled={buttonStyled}>
                        Sign in
                      </SubmitButton>
                    </form>
                  )}
                </Formik>
              </div>
            </FormContainer>
          </LoginContainer>
        </MainContainer>
      </Layout>
    );
  } else {
    return null;
  }
};

export default Login;
