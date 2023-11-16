import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
// import db from "../../Database";
import {BsThreeDotsVertical} from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch} from "react-redux";
import { addAssignment, selectAssignment, updateAssignment, setAssignment } from "./assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const dispatch = useDispatch();
  const [text, setText] = useState("New Assignment Description");

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
              onChange={(e) => dispatch(selectAssignment({...assignment, title: e.target.value}))} 
             className="form-control mb-2" />
        <textarea value={text} 
          onChange={(e) => setText(e.target.value)}
          className="form-control mb-3">
        </textarea>

        <div className="col d-flex justify-content-center">
              <div className="border p-3 mb-0 w-50 rounded-2">
                  <h6><label className="form-label" for="assignTo"> Assign To</label></h6>
                  <input type="text" className="form-control" id="assignTo" placeholder="Everyone"/>
                  <h6><label class="form-label mt-3" for="due">Due</label></h6>  
                  <input defaultValue={"Oct 01,2023,11:59 PM"} type="date" className="form-control" id="due"/>
                  <div className="row">
                      <div className="col-6">
                          <h6><label className="form-label mt-3" for="avalable">Available from</label></h6>  
                          <input defaultValue={""} type="date" className="form-control" id="avalable" name="Oct 01,2023,11:59 PM"/>
                      </div>
                      <div className="col-6">
                          <h6><label className="form-label mt-3" for="until">Until</label></h6>  
                          <input defaultValue={""} type="date" className="form-control" id="until" name="Oct 01,2023,11:59 PM"/>
                      </div>
                  </div>
              </div>
          </div>

        <hr/>
        
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-secondary float-end" onClick={() => dispatch(setAssignment())}>
        Cancel
    
      </Link>

      <button onClick={()=>{if(assignment._id === undefined) 
            {dispatch(addAssignment({...assignment, course: courseId}));} 
            else {dispatch(updateAssignment(assignment))};
            handleSave()}} className="btn btn-success me-2">
            Save
      </button>  
    </div>
  );
}


export default AssignmentEditor;