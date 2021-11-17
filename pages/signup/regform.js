import Box from "@mui/material/Box";
import { useFormik } from "formik";
import LayoutSignUp from "../../components/LayoutSignUp";

const Regform = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <LayoutSignUp>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </form>
      </Box>
    </LayoutSignUp>
  );
};

export default Regform;
