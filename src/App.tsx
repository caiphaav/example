import React, { useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Routes as AppRoutes, SharedTypes } from "@shared";

const renderRoute = ({ element, path }: SharedTypes.IRoute) => (
  <Route key={path} path={path} element={element} />
);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>{AppRoutes.map(renderRoute)}</Routes>
      </Router>
    </div>
  );
}

export default App;
