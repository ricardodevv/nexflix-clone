/* @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { css } from "@emotion/react";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FooterSignUp = () => {
  const [lang, setLang] = useState("English");
  const [showMenuItems, setShowMenuItems] = useState(false);

  const detectClickOnPage = () => {
    if (showMenuItems === true) {
      setShowMenuItems(!showMenuItems);
    }
  };

  useEffect(() => {
    document.addEventListener("click", detectClickOnPage);
    return () => document.removeEventListener("click", detectClickOnPage);
  });

  const handleChangeLang = (event) => {
    console.log(event);
    setLang(event.target.innerText);
    setShowMenuItems(!showMenuItems);
  };

  const handleChangeShowMenuitems = (event) => {
    setShowMenuItems(!showMenuItems);
  };

  return (
    <div
      css={css`
        background-color: #93939317;
        color: gray;
        padding: 0 0 1rem 0;
      `}
    >
      <Box sx={{ margin: "auto 5rem" }}>
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
        <div>
          <div
            css={css`
              border: 1px solid #00000036;
              border-radius: 3px;
              width: min-content;
              display: flex;
              align-items: center;
              cursor: pointer;
              padding: 0 0.5rem;
              position: relative;
            `}
            onClick={(event) => handleChangeShowMenuitems(event)}
          >
            <LanguageIcon />
            <p
              css={css`
                padding: 0 0.5rem;
                margin: 0.8rem 0.2rem;
                width: 3.5rem;
              `}
            >
              {lang}
            </p>
            <ArrowDropDownIcon />
          </div>
          {showMenuItems !== false ? (
            <div
              id="MenuItems"
              css={css`
                width: min-content;
                border: 1px gray solid;
                position: absolute;
                background-color: white;
                margin: -5.7rem 0;

                ul {
                  padding: 0;
                  margin: 0;
                }

                li {
                  list-style: none;
                  padding: 0 35.5px;
                  :hover {
                    background-color: #0073f7;
                    color: white;
                    cursor: pointer;
                  }
                }
              `}
            >
              <ul>
                <li onClick={(event) => handleChangeLang(event)}>English</li>
                <li onClick={(event) => handleChangeLang(event)}>Spanish</li>
              </ul>
            </div>
          ) : null}
        </div>
      </Box>
    </div>
  );
};

export default FooterSignUp;
