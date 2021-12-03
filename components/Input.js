/*
 * @jsxImportSource @emotion/react
 */
import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";

const Input = ({
  id,
  name,
  type,
  labelContent,
  containerStyled,
  labelStyled,
  labelTransition,
  inputStyled,
  formikValue,
  formikErrors,
  formikTouched,
  formikOnChange,
  inputError,
}) => {
  const [focusElement, setfocusElement] = useState(false);
  const wrapperRef = useRef(null);
  console.log(wrapperRef);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    wrapperRef.current.value.length !== 0 && focusElement === false
      ? setfocusElement(!focusElement)
      : null;

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleClickOutside = (e) => {
    if (
      e.target.id !== id &&
      focusElement === true &&
      wrapperRef.current.value.length === 0
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
        ${containerStyled}
        ${formikErrors && formikTouched ? inputError : null}
      `}
    >
      <label
        css={css`
          ${labelStyled && labelStyled}${focusElement && labelTransition
            ? labelTransition
            : null};
        `}
        htmlFor={name}
      >
        <span
          css={css`
            position: absolute;
            padding: 0 0.5rem;
            top: 22px;
          `}
        >
          {labelContent}
        </span>
      </label>
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
