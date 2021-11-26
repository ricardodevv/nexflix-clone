/*
 * @jsxImportSource @emotion/react
 */
import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";

const Input = ({
  id,
  name,
  type,
  containerStyled,
  labelStyled,
  inputStyled,
  formikValue,
  formikErrors,
  formikTouched,
  formikOnChange,
}) => {
  const [focusElement, setfocusElement] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  });

  const handleClickOutside = (e) => {
    let divv = document.getElementById("email");
    if (
      e.target.id !== "email" &&
      focusElement === true &&
      divv.value.length === 0
    ) {
      setfocusElement(!focusElement);
    }
  };

  const focusElementInput = (e) => {
    !focusElement ? setfocusElement(!focusElement) : null;
  };

  return (
    <div
      css={css`
        ${containerStyled && containerStyled} ${formikErrors && formikTouched
          ? "border-bottom: 3px solid #ff9900"
          : null}
      `}
    >
      <label
        css={css`
          ${labelStyled && labelStyled}${focusElement
            ? "top: -1.1rem; transition: 0.2s; font-size: 0.8rem"
            : null};
        `}
        htmlFor={name}
      />
      <input
        css={inputStyled}
        id={id}
        name={name}
        type={type}
        value={formikValue}
        onChange={formikOnChange}
        onClick={(e) => focusElementInput(e)}
        ref={wrapperRef}
      />
    </div>
  );
};

export default Input;
