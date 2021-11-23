/*
 * @jsxImportSource @emotion/react
 */

const InputField = ({
  containerStyled,
  labelStyled,
  inputStyled,
  htmlFor,
  focusElement,
  id,
  name,
  type,
  onChange,
  onBlur,
  value,
  onClick,
  refe,
}) => {
  return (
    <div css={containerStyled}>
      <label
        css={labelStyled}
        htmlFor={htmlFor}
        focusElement={focusElement}
      ></label>
      <input
        css={inputStyled}
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        onClick={onClick}
        ref={refe}
      />
    </div>
  );
};

export default InputField;
