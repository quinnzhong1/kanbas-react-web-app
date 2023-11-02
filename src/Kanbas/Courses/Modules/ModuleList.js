import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import "./index.css"

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-50">
            <input value={module.name} className="form-control m-1"
              onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            />
          </div>
          
          <div className="no-wrap-btn">
            <button onClick={() => dispatch(updateModule(module))} className="btn btn-primary me-2">
                Update
            </button>

            <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-success">Add</button>
          </div>
          
        </div>
        
        <textarea value={module.description} className="form-control m-1 w-50"
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>

      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">

            <div className="d-flex justify-content-between">
              <h3>{module.name}</h3>
              <div className="no-wrap-btn">
                <button
                  className="btn btn-danger btn-sm me-2 my-1"
                  onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
              </div>
            </div>
             
             <p>{module.description}</p>
             <p>{module._id}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;