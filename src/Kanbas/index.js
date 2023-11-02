import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Nav from "../Nav";
import "./index.css";
import db from "./Database";
import { React, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
      name: "New Course",      number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
    });
  console.log(courses);
  const updateCourse = () => {
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };
  
  
  const addNewCourse = () => {
      setCourses([...courses,
                { ...course,
                  _id: new Date().getTime() }]);
    };
  const deleteCourse = (courseId) => {
      setCourses(courses.filter((course) => course._id !== courseId));
    };
  return (
    <Provider store={store}>
      <div className="d-flex flex-row">
        <div className="kanbas-nav">
          <KanbasNavigation/>
        </div>
        <div className="flex-column flex-fill main-screen">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
            <Dashboard 
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
            } />
            {/* <Route path="Courses/:courseId/*" element={
              <Courses courses={courses}  />} /> */}
            <Route path="Courses/*" element={
            <Routes>
              <Route
                index
                // element={<Navigate to="/Kanbas/Courses/RS101/Home" />}/>
                element={<h1>Please select a course in Dashboard!</h1>}/>
              <Route path=":courseId/*" element={<Courses courses={courses}/>} />
            </Routes>
            } />
            {/* <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} /> */}
          </Routes>
        </div>
      </div>
    </Provider>
    

    );
  }
  export default Kanbas;