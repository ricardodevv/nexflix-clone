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
  },
}));

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
              .required("*Email required"),
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
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </form>
          )}
        </Formik>
      </BoxStyled>
    </LayoutSignUp>
  );
};

export default Regform;
