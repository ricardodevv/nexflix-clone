/*
 * @jsxImportSource @emotion/react
 */
import Button from "@mui/material/Button";

const SubmitButton = ({ children, buttonStyled, ...props }) => {
  return (
    <Button sx={buttonStyled} {...props}>
      {children}
    </Button>
  );
};

export default SubmitButton;
