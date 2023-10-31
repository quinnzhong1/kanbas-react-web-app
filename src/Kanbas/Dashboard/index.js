
import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import ShowCourses from "./default";
import EditCourses from "./editCourses";
function Dashboard() {
  return (
    <div>
        
          <Routes>
            <Route path="/" element={<ShowCourses/>} />
            <Route path="EditCourse" element={ <EditCourses/>}/>

          </Routes>

      
    </div>
  );
}

export default Dashboard;