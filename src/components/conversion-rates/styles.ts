import { styled } from "@mui/material";
import { Heading } from "../../design-system/headings";
import { ReactComponent as PaperLogo } from "../../assets/imgs/logo.svg";

export const ConversionResult = styled("div")`
  background-color: #f2f2f2;
  padding: 8px;
  border-radius: var(--main-radius);
`;

export const Logo = styled(PaperLogo)`
  min-width: 40px;
  height: auto;
`;

export const Title = styled(Heading)`
  margin-bottom: 16px;
`;
