import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import MapArray from "./components/MapArray.tsx";
import {colorPalette} from "./theme/theme.ts";
import FilterArray from "./components/FilterArray.tsx";

function App() {
  return (
      <ThemeProvider theme={colorPalette}>
      <CssBaseline />
          <Container sx={{p: 2}}>
              <MapArray />
              <FilterArray />
          </Container>
      </ThemeProvider>
  )
}

export default App
