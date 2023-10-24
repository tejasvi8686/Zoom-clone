import React from "react";
import { EuiProvider, EuiThemeProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const overrides = {
    color: {
      LIGHT: { Primary: "#0b5cff" },
      DARK: { Primary: "#0b5cff" },
    },
  };

  return (
    <EuiProvider>
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
