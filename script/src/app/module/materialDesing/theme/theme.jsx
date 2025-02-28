"use client"; 

import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { createContext, useContext, useMemo, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [darkMode, setDarkMode] = useState(prefersDarkMode);

    useEffect(() => {
    setDarkMode(prefersDarkMode);
    }, [prefersDarkMode]);

    const toggleTheme = () => setDarkMode((prev) => !prev);


    const collorVarJson = {
        black_blue: "#1C2C33", // Azul escuro 
        ligh_blue: "#0084FA", // Azul claro 
        white: "#ffffff", // Branco (principal)
        dark_blue_grey: "#273236", // Azul acinzentado escuro 
        blue: "#5EB9E0",  // Azul médio 
    };

    const theme = useMemo(() => {
    return createTheme({
        palette: {
            primary: {
                main: collorVarJson.black_blue,  
                contrastText: collorVarJson.ligh_blue, 
            },
            secondary: {
                main: collorVarJson.white, 
                contrastText: collorVarJson.dark_blue_grey,
            },
            background: {
                default: darkMode ? collorVarJson.black_blue : collorVarJson.white,  
                paper: darkMode ? collorVarJson.white : collorVarJson.white,  
            },
            text: {
                primary: darkMode ? collorVarJson.ligh_blue : collorVarJson.dark_blue_grey,  
                secondary: collorVarJson.blue , 
            },
        },
    });
    }, [darkMode]);

    if (!theme) {
    console.error("Theme is undefined! Check ThemeProvider.");
    return null;
    }

    return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        </MUIThemeProvider>
    </ThemeContext.Provider>
    );
}
