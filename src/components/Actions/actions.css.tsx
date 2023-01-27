import styled from "styled-components";

export const BtnClearCart = styled.button<any>(() => ({
  background: "#03216670",
  padding: "8px",
  "border-radius": "5px",
  outline: "0",
  border: "none",
  "box-shadow": "7px 6px 28px 1px rgba(0, 0, 0, 0.24)",
  transition: "0.2s all",
  color: "white",
  "font-weight": "500",
  float: "left",
  width: "100px",
  "&:active": {
    transform: "scale(0.98)",
    "box-shadow": "3px 2px 22px 1px rgba(0, 0, 0, 0.24)",
  },
}));

export const BtnBuyCart = styled.button<any>(() => ({
  background: "#03216670",
  padding: "8px",
  "border-radius": "5px",
  outline: "0",
  border: "none",
  "box-shadow": "7px 6px 28px 1px rgba(0, 0, 0, 0.24)",
  transition: "0.2s all",
  color: "white",
  "font-weight": "500",
  float: "right",
  width: "100px",
  "&:active": {
    transform: "scale(0.98)",
    "box-shadow": "3px 2px 22px 1px rgba(0, 0, 0, 0.24)",
  },
}));

export const MainContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: inline-block;
`;

export const Total = styled.div`
  float: right;
  margin-right: 15%;
`;
