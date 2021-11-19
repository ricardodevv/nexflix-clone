/*
 * @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import LayoutSignUp from "../../components/LayoutSignUp";

const Regform = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <LayoutSignUp>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <p>
          Step <b>2</b> of <b>3</b>
        </p>
        <h3>Create a password to start your membership</h3>
        <p>Just a few more steps and you're done! We hate paperwork, too.</p>
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
      </Box>
    </LayoutSignUp>
  );
};

export default Regform;
