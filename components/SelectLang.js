/* @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/system";

const SelectLang = ({ styles }) => {
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
    <Box sx={styles}>
      <div
        id="selectContainer"
        onClick={(event) => handleChangeShowMenuitems(event)}
      >
        <LanguageIcon id="langIcon" />
        <p>{lang}</p>
        <ArrowDropDownIcon />
      </div>
      {showMenuItems !== false ? (
        <div id="MenuItems">
          <ul>
            <li onClick={(event) => handleChangeLang(event)}>English</li>
            <li onClick={(event) => handleChangeLang(event)}>Español</li>
          </ul>
        </div>
      ) : null}
    </Box>
  );
};

export default SelectLang;
