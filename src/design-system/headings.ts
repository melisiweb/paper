import { styled } from "@mui/material";

export const Heading = styled("h1", {
  shouldForwardProp: (prop: string) => prop === "children",
})<{ size: number }>`
  font-weight: bold;
  font-size: ${(props) => props.size}px;
  margin: 0;
`;
