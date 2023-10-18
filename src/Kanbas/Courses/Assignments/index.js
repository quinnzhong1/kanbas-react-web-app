import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {BsThreeDotsVertical} from "react-icons/bs";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="flex-row flex-fill me-4" style={{minWidth: 470}}>
      {/* <h2>Assignments for course {courseId}</h2> */}
      <div className="d-flex flex-row flex-fill justify-content-between">
        <div className="d-flex float-start flex-nowrap w-50">
            <input type="text"
                    className="form-control"
                    id="search-for-assignment"
                    placeholder="Search for Assignment"/>
        </div>

        <div className="d-flex float-end flex-nowrap">
            <button type="button" className="btn btn-secondary btn-sm ms-1 no-wrap-btn">
                <i class="fa-solid fa-plus"></i>
                + Group
            </button>
            
            <button type="button" className="btn btn-danger btn-sm ms-1 no-wrap-btn">
                <i class="fa-solid fa-plus"></i>
                + Modules
            </button>

            <button className="btn btn-sm ms-1 no-wrap-btn btn-secondary chevron" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                <BsThreeDotsVertical/>
            </button>

            
        </div>   
      </div>

      <hr class="mt-4"/> 
        
      <div className="list-group">
        <div className="list-group-item list-group-item-secondary fw-bold">Assignments for {courseId}</div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item ps-5">
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;