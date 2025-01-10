import {createTheme} from "@mui/material";

export const colorPalette = createTheme({
    palette: {
        primary: {
            main: '#808F85',
        },
        secondary: {
            main: '#6B0F1A',
        },
        background: {
            default: '#DCE0D9',
            paper: '#808F85',
        },
        text: {
            primary: '#31081F',
            secondary: '#595959',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});
