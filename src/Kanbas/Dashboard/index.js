import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr className="my-3"/>
      <div className="d-flex flex-column ps-2">
        <h3>Published Courses ({courses.length})</h3>
        <hr className="mt-0 mb-4"/>
            <div id="cards" className="flex-row d-flex flex-wrap">
                
                {courses.map((course, index) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center course-card">
                        <div className="card course-card-style">
                            <img src="/images/course-blue.png" class="card-img-top" alt="..." />
                            <div className="card-body p-2">
                                <h5 className="card-title card-title-style mb-0">{course.name}</h5>
                                <Link
                                key={course._id}
                                to={`/Kanbas/Courses/${course._id}`}
                                className="btn btn-primary btn-sm"
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