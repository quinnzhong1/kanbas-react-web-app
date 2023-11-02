import db from "../Database";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {

  return (
      <div>
          <h1>Dashboard</h1>
          <hr className="my-3" />
          <div className="d-flex flex-column ps-2">
              <h3>
                  Published Courses ({courses.length})
              </h3>
              <hr className="mt-0 mb-4" />
          </div>

          <div className="mb-2 ps-2">
            <h5>Course</h5>
            <div className="border p-2 rounded-2">
              <input value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
              <input value={course.number} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
              <input value={course.startDate} className="form-control mb-2" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
              <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            </div>
            
            
            <div className="my-2">
              <button onClick={addNewCourse} className="btn btn-success btn-sm me-1">
                  Add
              </button>
              <button onClick={updateCourse} className="btn btn-primary btn-sm ms-1" >
                  Update
              </button>
            </div>


            <div className="list-group my-4">
                {courses.map((course) => (
                <Link key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="list-group-item">

                    {course.name}

                    <button className="float-end btn-danger btn ms-1 btn-sm" 
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>

                    <button className="float-end btn-warning btn me-1 btn-sm" 
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                </Link>
                ))}
            </div>
          </div>


      </div>
  );
}

export default Dashboard;