import { Box, Grid } from "@mui/material";
import { ConversionRates } from "./components/conversion-rates";

const App: React.FC = () => {
  return (
    <>
      <header></header>
      <main>
        <Grid container paddingX={{ xs: 2, md: 0 }}>
          <Grid item md />
          <Grid item xs={12} md={6}>
            <Box mt={8}>
              <ConversionRates />
            </Box>
          </Grid>
          <Grid item md />
        </Grid>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
