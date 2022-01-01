/*
 * @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";

const containerStyled = css`
  flex: 1;
  position: relative;
  display: flex;
  margin: 0.3rem 0;
  align-items: center;
  border: 1px solid gray;
  border-radius: 2px;
`;

const labelStyled = css`
  position: absolute;
  top: -0.2rem;
  width: 100%;
  transition: 0.2s;
  color: white;
  z-index: 2;
`;

const labelTransition = css`
  top: -1.1rem;
  transition: 0.1s;
  font-size: 0.8rem;
  font-weight: 700;
`;

const inputStyled = css`
  font-size: 1rem;
  outline: none;
  border: none;
  width: 100%;
  padding: 1.3rem 0.5rem;
  height: fit-content;
  z-index: 1;
  background-color: #333;
  border-radius: 3px;
`;

const inputError = css`
  border: 1px solid red;
`;

const buttonStyled = {
  fontSize: "1.5rem",
  textTransform: "none",
  backgroundColor: "#e50914",
  borderRadius: 0,
  color: "white",
  marginTop: "2rem",
  "&:hover": {
    transition: "none",
    backgroundColor: "#e50914",
  },
};

const ProviderButton = css`
  background-color: #f7f7f7;
  border: none;
  outline: none;
  border-radius: 2px;
  margin: 7px 0;
  padding: 0.8rem;
  color: #2e2e2e;
  cursor: pointer;
  font-size: smaller;
  text-align: center;
`;

export {
  containerStyled,
  labelStyled,
  labelTransition,
  inputStyled,
  inputError,
  buttonStyled,
  ProviderButton,
};
