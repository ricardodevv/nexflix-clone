import LanguageIcon from "@mui/icons-material/Language";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const LanguageSelect = styled((props) => <Select {...props} />)(
  ({ theme }) => ({
    height: "2.3rem",
    color: "white",
    border: "1px solid white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "& .MuiSelect-select": {
      padding: "0.4rem",
    },
    "& fieldset": {
      border: "none",
    },
    "& div": { display: "flex", alignItems: "center" },
  })
);

const LanguageComponent = () => {
  const [lang, setLang] = useState("English");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <LanguageSelect
      onChange={handleChange}
      inputProps={{ "aria-label": "language" }}
      defaultValue={lang}
      renderValue={(lang) => {
        return (
          <div>
            <LanguageIcon sx={{ fontSize: "1em" }} />
            {lang}
          </div>
        );
      }}
    >
      <MenuItem value="English">English</MenuItem>
      <MenuItem value="Spanish">Spanish</MenuItem>
    </LanguageSelect>
  );
};

export default LanguageComponent;
