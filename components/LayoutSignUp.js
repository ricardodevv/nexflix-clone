/* @jsxImportSource @emotion/react */
import FooterSignUp from "./FooterSignUp";
import HeaderSignUp from "./HeaderSignUp";

const LayoutSignUp = ({ children }) => {
  return (
    <div>
      <HeaderSignUp />
      {children}
      <FooterSignUp />
    </div>
  );
};

export default LayoutSignUp;
