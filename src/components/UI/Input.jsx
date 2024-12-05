import styled from "styled-components";

export const Input = ({ value, onChange, max,min , type, id, ...props }) => {
    return (
      <StyleInput
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        max={max}
        min={min}
        {...props}
      />
    );
  };

  const StyleInput = styled.input`
    width: 60px;
  height: 32px;

  background: #ffffff;
  border-radius: 6px;
  border: solid 1px gray;
  `