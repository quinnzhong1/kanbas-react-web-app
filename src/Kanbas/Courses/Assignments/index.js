import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import db from "../../Database";
import "./index.css";
import {BsThreeDotsVertical} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { 
  deleteAssignment,
  selectAssignment,
  setAssignment,
  setAssignments,
}
from "./assignmentsReducer";
import * as client from "./client"; 

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    client.findModulesForAssignment(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);

  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);

  // const courseAssignments = assignments.filter(
  //   (assignment) => assignment.course === courseId);

  const handleDeleteClick = (assignment) => {
    const confirmDelete = window.confirm('Do you want to delete the assignment?');
    if (confirmDelete) {
      client.deleteAssignment(assignment._id).then((status) => {
        dispatch(deleteAssignment(assignment._id)) })
    } else {dispatch(setAssignment)}
  };

  
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
            
            <Link type="button" className="btn btn-danger btn-sm ms-1 no-wrap-btn d-flex align-items-center" to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                <i class="fa-solid fa-plus"></i>
                + Assignment
            </Link>

            <button className="btn btn-sm ms-1 no-wrap-btn btn-secondary chevron" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                <BsThreeDotsVertical/>
            </button>

            
        </div>   
      </div>

      <hr class="mt-4"/> 
        
      <div className="list-group">
        <div className="list-group-item list-group-item-secondary fw-bold">Assignments for {courseId}</div>
        
        {assignments.map((assignment) => (
          <div className="list-group-item d-flex justify-content-between">
          <Link
            key={assignment._id}
            onClick={()=> {
              dispatch(selectAssignment(assignment))}} 
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="ps-5 d-flex align-items-center justify-content-between assignment_style">
            {assignment.title}
          </Link>
          <div className="d-inline-block float-end">
          <button onClick={(event)=> {
          event.preventDefault();
          handleDeleteClick(assignment)}} 
          className="btn  btn-danger">
            Delete
          </button>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;