/* @jsxImportSource @emotion/react */
import { Box } from "@mui/system";
import { css } from "@emotion/react";

const FooterSignUp = () => {
  return (
    <div
      css={css`
        background-color: #93939317;
      `}
    >
      <Box sx={{ margin: "auto 5rem" }}>
        <div
          css={css`
            padding: 2rem 0 1rem 0;
            color: gray;
          `}
        >
          Questions? Call{" "}
          <span
            css={css`
              :hover {
                cursor: pointer;
                text-decoration: underline;
              }
            `}
          >
            1-844-505-2993
          </span>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: flex-start;
            font-size: 0.8rem;
            ul {
              margin: 0 8rem 0 0;
              padding: 0;
            }
            li {
              list-style: none;
              margin: 1rem 0;
              :hover {
                text-decoration: underline;
                text-decoration-color: gray;
                cursor: pointer;
              }
            }
          `}
        >
          <ul>
            <li>FAQ</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Terms of Use</li>
          </ul>
          <ul>
            <li>Privacy</li>
          </ul>
        </div>
      </Box>
    </div>
  );
};

export default FooterSignUp;
