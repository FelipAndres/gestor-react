import NavBar from "./components/Navbar";
import HBar from "./components/HBar";
import CRUDRegistros from "./pages/CRUDRegistros";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/404Page";
import InsumosPage from "./pages/InsumosPage";
import ReportesPage from "./pages/ReportesPage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <NavBar />
      <div className="dash-app">
        <HBar />
        <main className="dash-content">
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="administracion" element={<CRUDRegistros />} />
              <Route path="insumos" element={<InsumosPage />} />
              <Route path="reportes" element={<ReportesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
};
export default App;
