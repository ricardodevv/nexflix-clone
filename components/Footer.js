/* @jsxImportSource @emotion/react */
import { Box } from "@mui/system";
import { css } from "@emotion/react";
import SelectLang from "./SelectLang";

const SelectLangStyled = css`
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
    margin: 1rem 0.5rem;
    width: 3rem;
  }

  #MenuItems {
    width: min-content;
    border: 1px gray solid;
    position: absolute;
    background-color: white;
    top: 229.4rem;

    ul {
      padding: 0;
      margin: 0;
      background-color: black;
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

const Footer = () => {
  return (
    <footer
      css={css`
        background-color: black;
      `}
    >
      <Box
        sx={{
          maxWidth: "1100px",
          color: "#757575",
          margin: "auto",
          padding: "4rem",
          "& li": {
            listStyle: "none",
          },
        }}
      >
        <p
          css={css`
            margin: 0;
          `}
        >
          Questions? Call +1 (408) 469-4467 (USA)
        </p>
        <div
          css={css`
            font-size: 0.8rem;
            display: flex;
            justify-content: space-between;
            & li {
              margin: 1rem 0;
              cursor: pointer;
              &:hover {
                text-decoration: underline;
              }
            }
            & ul {
              padding: 0;
            }
          `}
        >
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <SelectLang styles={SelectLangStyled} />
      </Box>
    </footer>
  );
};

export default Footer;
