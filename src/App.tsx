import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Routes as AppRoutes,
  SharedTypes,
  Theme,
  SharedComponents,
} from "@shared";

const renderRoute = ({ element, path }: SharedTypes.IRoute) => (
  <Route key={path} path={path} element={element} />
);

function App() {
  return (
    <div className="App">
      <SharedComponents.GlobalStyle />
      <ThemeProvider theme={Theme.lightTheme}>
        <Router>
          <Routes>{AppRoutes.map(renderRoute)}</Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
