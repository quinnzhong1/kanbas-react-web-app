import { React} from "react";
import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";

function Head() {
    const courses = db.courses;
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
        </div>
    );
}

export default Head;