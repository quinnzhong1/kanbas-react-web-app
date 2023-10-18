import React from "react";
import { useParams, Routes, Route, Navigate, useLocation, Link} from "react-router-dom";
// import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {FaBars} from "react-icons/fa";
import { BiGlasses } from "react-icons/bi";
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  if (courseId === null) courseId = "RS101";
  const {pathname} = useLocation();
  const [empty, kanbas, courses, id, screen, assignmentId] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      
      <div className="align-items-center flex-row flex-fill fs-5 no-wrap-btn flex-nowrap d-flex">
        <i className="red-icon mx-2 my-0"><FaBars/></i>
        <span className="d-flex flex-grow-1">
            <span className="red-icon mx-2">{courses}</span> &gt; <span className="red-icon mx-2">{course.name}</span> &gt; <span className={`mx-2 ${assignmentId != null && "red-icon" }`}>{screen}</span> <span>{assignmentId != null ? "> " + assignmentId : ""}</span>
        </span>
        <button type="button" className="btn btn-secondary float-end btn-sm ms-2">
                <i className="me-2"><BiGlasses/></i>
                Student View
        </button>
      </div>

      <hr/>
      <div className="d-flex flex-row flex-fill">
            <CourseNavigation />
            <div className="flex-column flex-fill">
                <div
                className="overflow-y-scroll position-fixed bottom-0 end-0"
                style={{
                    left: "300px",
                    top: "90px",
                    right:"20px",
                }}
                >
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route
                    path="Assignments/:assignmentId"
                    element={<AssignmentEditor/>}
                    />
                    <Route path="Grades" element={<Grades/>} />
                </Routes>
                </div>
            </div>
      </div>
      
      

    </div>
  );
}

export default Courses;