import styled from "styled-components";
import Vector from "../../assets/icon/plus.svg";
export const Button = ({ children, type, onClick, disabled, ...props }) => {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      <StyleImg src={Vector} className="vector" />
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
    width: 110px;
    height: 44px;
    border-radius: 20px;
    background-color: #8a2b06;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    &:hover {
      background-color: #7e2a0a;
    }
    &:active {
      background-color: #993108;
    }
    &:disabled {
      background-color: #cac6c4;
    }
`;
const StyleImg = styled.img`
    width: 14px;
    height: 14px;
`
