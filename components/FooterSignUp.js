/* @jsxImportSource @emotion/react */
import { Box } from "@mui/system";
import { css } from "@emotion/react";
import SelectLang from "./SelectLang";

const SelectLangStyled = css`
  position: relative;

  #selectContainer {
    border: 1px solid gray;
    border-radius: 3px;
    width: min-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 0.5rem;
    position: relative;
    color: gray;
    outline: white;
  }

  p {
    margin: 0.8rem 0.5rem;
    width: 3rem;
  }

  #MenuItems {
    width: min-content;
    border: 1px gray solid;
    position: absolute;
    background-color: white;
    top: -2.7rem;

    ul {
      padding: 0;
      margin: 0;
    }

    li {
      list-style: none;
      padding: 0 36.5px;
    }

    li:hover {
      background-color: #0073f7;
      color: white;
      cursor: pointer;
    }
  }
`;

const FooterSignUp = () => {
  return (
    <div
      css={css`
        background-color: #93939317;
        color: gray;
      `}
    >
      <Box sx={{ margin: "auto 5rem", paddingBottom: "1rem" }}>
        <div
          css={css`
            padding: 2rem 0 1rem 0;
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
        <SelectLang styles={SelectLangStyled} />
      </Box>
    </div>
  );
};

export default FooterSignUp;
