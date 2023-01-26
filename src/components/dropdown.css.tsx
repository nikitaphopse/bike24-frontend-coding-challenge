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
