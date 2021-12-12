/*
 * @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import Formik from "../components/Formik";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { useStateValue } from "../components/StateProvider";
import SubmitButton from "../components/SubmitButton";
import * as Yup from "yup";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import router from "next/router";
import { setUser } from "../components/Reducer";

const login = () => {
  const [store, dispatch] = useStateValue();

  const loginUser = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(user));
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

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
    color: #525252c7;
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
    background-color: transparent;
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

  return (
    <Layout>
      <div
        css={css`
          max-width: 30rem;
          margin: auto;
        `}
      >
        <p>Login</p>
        <Formik
          initialValues={{
            email: store.email ? store.email : "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("*Please enter a correct email address")
              .required("*Email required"),
            password: Yup.string()
              .required("*Password required")
              .min(8, "*Password should be minimun 8 characters length"),
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
    </Layout>
  );
};

export default login;
