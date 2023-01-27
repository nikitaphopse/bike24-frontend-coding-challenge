import styled from "styled-components";

export const Table = styled.table`
  margin: 50px;
  width: 90%;
`;

export const TableHead = styled.th<any>((props) => ({
  padding: "8px",
  width: props.name ? "40%" : "15%",
  "text-align": props.name ? "left" : "center",
}));

export const TableData = styled.td<any>((props) => ({
  padding: "8px",
  width: props.name ? "40%" : "20%",
  "text-align": props.name ? "left" : "center",
}));

export const Image = styled.img`
  height: 30px;
  cursor: pointer;
`;
