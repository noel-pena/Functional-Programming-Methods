import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import MapArray from "./components/MapArray.tsx";
import {colorPalette} from "./theme/theme.ts";

function App() {
  return (
      <ThemeProvider theme={colorPalette}>
      <CssBaseline />
          <Container sx={{p: 2}}>
              <MapArray />
          </Container>
      </ThemeProvider>
  )
}

export default App
