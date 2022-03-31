import { Route } from "wouter";
import HomePage from "./pages/HomePage";
import CRUDPage from "./pages/CRUDPage";
import NavBar from "./components/Navbar";
import HBar from "./components/HBar";
import FormRegister from "./components/FormRegister";

export const App = () => {
  return (
    <div className="dash">
      <NavBar />
      <div className="dash-app">
        <HBar />
        <main className="dash-content">
          <div className="container-fluid">
            <h1>INSUMOS TIC</h1>
            <FormRegister />
          </div>
        </main>
      </div>
    </div>
  );
};
export default App;
