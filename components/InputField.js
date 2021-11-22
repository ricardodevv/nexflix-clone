import styled from "@emotion/styled";

const InputDiv = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  label::before {
    content: "Email address";
    position: absolute;
    padding: 0 0.5rem;
    top: 22px;
  }
  ${(props) =>
    props.showError && props.error && props.touched
      ? "border-bottom: 2px solid yellow"
      : null}
`;

const Label = styled.label`
  position: absolute;
  top: 0rem;
  width: 100%;
  transition: 0.2s;
  color: #525252;
  z-index: 2;
  ${(props) =>
    props.focusEmail
      ? "top: -1.1rem; transition: 0.2s; font-size: 0.8rem"
      : null};
`;

const Input = styled.input`
  font-size: 1rem;
  outline: none;
  border: none;
  width: 100%;
  padding: 1.4rem 0.5rem;
  height: fit-content;
  z-index: 1;
  background-color: transparent;
`;

const InputField = ({
  showError,
  error,
  touched,
  htmlFor,
  focusEmail,
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
    <InputDiv showError={showError} error={error} touched={touched}>
      <Label htmlFor={htmlFor} focusEmail={focusEmail}></Label>
      <Input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        onClick={onClick}
        ref={refe}
      />
    </InputDiv>
  );
};

export default InputField;
