/* @jsxImportSource @emotion/react */
import LanguageIcon from "@mui/icons-material/Language";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const LanguageComponent = ({ styles }) => {
  const [lang, setLang] = useState("English");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <Select
      onChange={handleChange}
      inputProps={{ "aria-label": "language" }}
      defaultValue={lang}
      renderValue={(lang) => {
        return (
          <div>
            <LanguageIcon id="langIcon" sx={{ fontSize: "1em" }} />
            {lang}
          </div>
        );
      }}
      sx={styles}
    >
      <MenuItem value="English">English</MenuItem>
      <MenuItem value="Spanish">Spanish</MenuItem>
    </Select>
  );
};

export default LanguageComponent;
