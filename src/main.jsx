import "./Spur.css";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CRUDPage from "./pages/CRUDPage";
import HomePage from "./pages/HomePage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="administracion" element={<CRUDPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
