import { Box } from "@mui/system";
import { css } from "@emotion/react";
import LanguageComponent from "./LanguageComponent";

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
        <LanguageComponent
          styles={{
            border: "1px solid #80808061",
            color: "gray",
            "& #langIcon": {
              margin: "0 0.5rem",
            },
            "& .MuiSvgIcon-root": {
              color: "gray",
            },
            "& fieldset": {
              border: "none",
            },
            "& div": {
              display: "flex",
              alignItems: "center",
              padding: "0.5rem",
            },
          }}
        />
      </Box>
    </footer>
  );
};

export default Footer;
