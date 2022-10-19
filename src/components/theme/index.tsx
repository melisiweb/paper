import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material";
import { globalStyles } from "./styles";

const theme = createTheme({});

export const Theme: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles styles={globalStyles} />
    </ThemeProvider>
  );
};
