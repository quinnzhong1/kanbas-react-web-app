import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import {BsThreeDotsVertical} from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="pe-4 flex-column" style={{minWidth: 470}}>
     <div className="d-flex flex-nowrap align-items-center flex-fill justify-content-end">
        <span className="px-3">
            <span style={{color: "green"}} className="fw-bold align-items-center d-flex"><AiFillCheckCircle className="me-2"/>Published</span>
        </span>

        <span>
            <button className="btn btn-sm ms-1 no-wrap-btn btn-secondary" type="button">
                <BsThreeDotsVertical/>
            </button>
        </span>
     </div>

        <hr className="mt-3"/>
        
        <div className="my-2">Assignment Name</div>
      <input value={assignment.title}
             className="form-control mb-2" />

        <hr/>
        
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-secondary float-end">
        Cancel
    
      </Link>

      <button onClick={handleSave} className="btn btn-danger me-2 float-end">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;