import "./Spur.css";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CRUDPage from "./pages/CRUDPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/404Page";
import InsumosPage from "./pages/InsumosPage";
import ReportesPage from "./pages/ReportesPage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="administracion" element={<CRUDPage />} />
        <Route path="insumos" element={<InsumosPage />} />
        <Route path="reportes" element={<ReportesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
