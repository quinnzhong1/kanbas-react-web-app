import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Nav from "../Nav";
import "./index.css";

function Kanbas() {
  return (
    <div className="d-flex flex-row">
      <div className="kanbas-nav">
        <KanbasNavigation/>
      </div>
      <div className="flex-column flex-fill main-screen">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard/*" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard/*" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Courses/*" element={
          <Routes>
            <Route
              index
              element={<Navigate to="/Kanbas/Courses/RS101/Home" />}/>
            <Route path=":courseId/*" element={<Courses />} />
          </Routes>
          } />
        </Routes>
      </div>
    </div>

    );
  }
  export default Kanbas;