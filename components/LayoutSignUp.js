/* @jsxImportSource @emotion/react */
import FooterSignUp from "./FooterSignUp";
import HeaderSignUp from "./HeaderSignUp";
import { css } from "@emotion/react";

const LayoutSignUp = ({ children }) => {
  return (
    <div>
      <HeaderSignUp />
      <div
        css={css`
          animation: fadeIn 1s, rightToLeft 0.3s;
          position: relative;

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes rightToLeft {
            0% {
              right: -30rem;
            }
            100% {
              right: 0rem;
            }
          }
        `}
      >
        {children}
      </div>
      <FooterSignUp />
    </div>
  );
};

export default LayoutSignUp;
