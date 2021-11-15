/* @jsxImportSource @emotion/react */
import { useState } from "react";
import { Box } from "@mui/system";
import { css } from "@emotion/react";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FooterSignUp = () => {
  const [lang, setLang] = useState("English");
  const [showMenuItems, setShowMenuItems] = useState(false);

  const handleChangeLang = (event) => {
    setLang(event.target.value);
  };

  const handleChangeShowMenuitems = (event) => {
    setShowMenuItems(!showMenuItems);
  };

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
        <div>
          <div
            css={css`
              border: 1px solid black;
              width: min-content;
              display: flex;
              align-items: center;
              cursor: pointer;
            `}
            onClick={(event) => handleChangeShowMenuitems(event)}
          >
            <LanguageIcon />
            <p>{lang}</p>
            <ArrowDropDownIcon />
          </div>
          {showMenuItems !== false ? (
            <div
              id="MenuItems"
              css={css`
                width: min-content;
                border: 1px gray solid;

                ul {
                  padding: 0;
                }

                li {
                  list-style: none;
                  padding: 0 0.5rem;
                }
              `}
            >
              <ul>
                <li>English</li>
                <li>Spanish</li>
              </ul>
            </div>
          ) : null}
        </div>
      </Box>
    </div>
  );
};

export default FooterSignUp;
