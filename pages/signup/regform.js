/*
 * @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import LayoutSignUp from "../../components/LayoutSignUp";
import { useStateValue } from "../../components/StateProvider";
import styled from "@emotion/styled";
import * as Yup from "yup";
import Formik from "../../components/Formik";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";

const BoxStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "2rem auto 6rem auto",
  padding: "0 0 9rem 0",
  maxWidth: "28rem",
  color: "#424242",

  "& p, h3": {
    margin: "0rem",
  },
  "& h3": {
    fontSize: "1.5rem",
    lineHeight: "1.7rem",
    marginBottom: "0.5rem",
  },
  "& #p-text": {
    fontSize: "1.15rem",
    lineHeight: "1.3rem",
    marginBottom: "0.5rem",
  },
}));

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

const Regform = () => {
  const [store, dispatch] = useStateValue();
  console.log(store);

  const formik = useFormik({
    initialValues: {
      email: store.email.length !== 0 ? store.email : "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("*Invalid email address")
        .required("*Email required"),
      password: Yup.string()
        .required("*Password required")
        .min(8, "*Password should be minimun 8 characters length")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      passwordConfirmation: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <LayoutSignUp>
      <BoxStyled>
        <p>
          STEP <b>2</b> OF <b>3</b>
        </p>
        <h3>Create a password to start your membership</h3>
        <p id="p-text">
          Just a few more steps and you're done!
          <br /> We hate paperwork, too.
        </p>
        <Formik
          initialValues={{
            email: store.email ? store.email : "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("*Please enter a correct email address")
              .required("Email required!"),
            password: Yup.string()
              .required("*Password required")
              .min(8, "*Password should be minimun 8 characters length")
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
              ),
          })}
          onSubmit={() => {
            router.push("/signup/registration");
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
              <SubmitButton type="submit" buttonStyled={buttonStyled}>
                Next
              </SubmitButton>
            </form>
          )}
        </Formik>
      </BoxStyled>
    </LayoutSignUp>
  );
};

export default Regform;
