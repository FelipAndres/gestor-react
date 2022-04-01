import NavBar from "./components/Navbar";
import HBar from "./components/HBar";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="dash">
      <NavBar />
      <div className="dash-app">
        <HBar />
        <main className="dash-content">
          <div className="container-fluid">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
export default App;
