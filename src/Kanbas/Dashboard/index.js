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
              Name:
              <input value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
              Number:
              <input value={course.number} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
              Start Date:
              <input value={course.startDate} className="form-control mb-2" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
              End Date:
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
            {/* <div className="list-group my-4">
                {courses.map((course) => (
                <Link key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="list-group-item">

                    {course.name}

                    <button className="float-end btn-danger btn ms-1 btn-sm" 
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id.$oid);
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
            </div> */}
            <div id="cards" className="flex-row d-flex flex-wrap">
                
                {courses.map((course, index) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center course-card">
                        <div className="card course-card-style">
                            <img src="/images/course-blue.png" class="card-img-top" alt="..." />
                            <div className="card-body p-2">
                                <h5 className="card-title card-title-style mb-0">{course.name}</h5>
                                <Link
                                key={course._id}
                                to={`/Kanbas/Courses/${course._id.$oid}`}
                                className="btn btn-primary for_card d-flex my-2"
                                >
                                {course.name}
                                </Link>
                                
                                <p className="card-text card-text-style mb-0">
                                {course.number}
                                </p>
                                <p className="card-text card-text-style mb-0">
                                Start Date: {course.startDate}
                                </p>
                                <p className="card-text card-text-style mb-0">
                                End Date: {course.endDate}
                                </p>

                                <div className="d-flex justify-content-end align-items-end my-2">
                                  <button className="float-end btn-danger btn btn-sm me-2"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      deleteCourse(course._id.$oid);
                                    }}>
                                    Delete
                                  </button>

                                  <button className="float-end btn-warning btn btn-sm"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      setCourse(course);
                                    }}>
                                    Edit
                                  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                ))}
                
            </div>
          </div>


      </div>
  );
}

export default Dashboard;