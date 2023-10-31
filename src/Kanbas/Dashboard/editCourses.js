import db from "../Database";
import { React, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./index.css";

function EditCourses() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course",      number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
      });
    
    const addNewCourse = () => {
        setCourses([...courses,
                  { ...course,
                    _id: new Date().getTime() }]);
      };
    

    return (
        <div>
            <h1>Dashboard</h1>
            <hr className="my-3" />
            <div className="d-flex flex-column ps-2">
                <h3>
                    Published Courses ({courses.length})
                    <span>
                        <Link className="btn btn-success float-end" to={'/Kanbas/Dashboard'}>Save</Link>
                    </span>
                </h3>
                <hr className="mt-0 mb-4" />
            </div>

            <h5>Course</h5>
            <input value={course.name} className="form-control" />
            <input value={course.number} className="form-control" />
            <input value={course.startDate} className="form-control" type="date" />
            <input value={course.endDate} className="form-control" type="date" />
            <button onClick={addNewCourse} >
                Add
            </button>

            <div className="list-group">
                {courses.map((course) => (
                <Link key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="list-group-item">
                    {course.name}
                </Link>
                ))}
            </div>

        </div>
    );
}

export default EditCourses;