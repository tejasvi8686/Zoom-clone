import React, { useEffect, useState } from "react";
import { EuiProvider, EuiThemeColorMode, EuiThemeProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import "@elastic/eui/dist/eui_theme_dark.css"; 
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";


const App = () => {
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector((zoom) => zoom.auth.isDarkTheme);
  const [theme, setTheme] = useState<EuiThemeColorMode>("light");
  const [isInitialTheme, setisInitialTheme] = useState(true)

  useEffect(() => {
   const theme = localStorage.getItem("zoom-theme");
   if(theme) {
    setTheme(theme as EuiThemeColorMode);
   }
   else{
    localStorage.setItem("Zoom-theme","light");
   }
  },[]);

  useEffect(()=> {
    if(isInitialTheme) setisInitialTheme(false);
    else{
  window.location.reload()
  }
  },[isDarkTheme])

  const overrides = {
    color: {
      LIGHT: { Primary: "#0b5cff" },
      DARK: { Primary: "#0b5cff" },
    },
  };

  return (
    <EuiProvider colorMode={theme}>
      <EuiThemeProvider modify={overrides}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="#" element={<Dashboard />} />
        </Routes>
      </EuiThemeProvider>
    </EuiProvider>
  );
};

export default App;
