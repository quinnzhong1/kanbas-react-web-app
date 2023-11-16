import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import "./index.css"
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then(() => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async (moduleId) => {
    const status = await client.updateModule(moduleId, module);
    dispatch(updateModule(module));
  };

  return (
    <ul className="list-group">
      <li className="list-group-item">
        
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-50">
            Name:
            <input value={module.name} className="form-control m-1"
              onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            />
          </div>
          
          <div className="no-wrap-btn">
            <button onClick={() => handleUpdateModule(module._id)} className="btn btn-primary me-2">
                Update
            </button>

            <button onClick={handleAddModule} className="btn btn-success">Add</button>
          </div>
          
        </div>
        
        Description:
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
                  onClick={() => handleDeleteModule(module._id)}>
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