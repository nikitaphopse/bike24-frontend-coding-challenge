import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

export const DropdownBox = styled.select`
  width: 450px;
  padding: 10px 15px;
  margin: 5px;
  border: 2px solid #abb0b8;
  background: white;
  border-radius: 6px;
  outline: 0;
  color: #4c4e52;
`;

export const SliderContainer = styled.div`
  display: inline-block;
  width: 30%;
  margin: 0px 15px;
  margin: 0 6%;
`;

export const AmountContainer = styled.div`
  display: inline-block;
  margin: 0 10px;
`;

export const Count = styled.span`
  padding: 10px;
  border: 2px solid #abb0b8;
  margin-right: 10px;
  color: #4c4e52;
  border-radius: 6px;
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 12px;
  margin: 5px 0;
`;

export const BtnAddCart = styled.button<any>((props) => ({
  background: "#03216670",
  padding: "8px",
  "border-radius": "5px",
  outline: "0",
  border: "none",
  "box-shadow": "7px 6px 28px 1px rgba(0, 0, 0, 0.24)",
  transition: "0.2s all",
  color: "white",
  "font-weight": "500",
  opacity: props.disabled ? "0.5" : "1",
  cursor: props.disabled ? "not-allowed" : "pointer",
  float: "right",
  "&:active": {
    transform: "scale(0.98)",
    "box-shadow": "3px 2px 22px 1px rgba(0, 0, 0, 0.24)",
  },
}));
