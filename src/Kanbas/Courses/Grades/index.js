import db from "../../Database";
import { useParams } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="me-4">
      {/* <h1>Grades</h1> */}
      <div className="flex-column d-flex justify-content-end flex-nowrap w-100 flex-fill">
        <div className="flex-row justify-content-end d-flex">
          <button type="button" className="btn btn-secondary btn-sm ms-1 no-wrap-btn">
            Import
          </button>

          <button class="btn btn-sm ms-1 no-wrap-btn btn-secondary" type="button">
            Export
          </button>

          <button className="btn btn-sm ms-1 no-wrap-btn btn-secondary" type="button">
            <AiFillSetting/>
          </button>
        </div>
        <div className="flex-row d-flex w-100 mt-2">
          <div className="flex-column w-50 fw-bold me-1">
            <label for="student-names" className="form-label">Student Names</label>
          </div>
          <div className="flex-column w-50 fw-bold ms-1">
            <label for="assignment-names" className="form-label">Assignment Names</label>
          </div>
        </div>
        <div className="flex-row d-flex w-100 my-1">
          <div className="flex-row d-flex w-100 mb-2">
                <input type="text" id="student-names" className="form-control me-2" placeholder="Search Students" aria-describedby="basic-addon1"/>
                <input type="text" id="assignment-names" className="form-control ms-2" placeholder="Search Assignments" aria-describedby="basic-addon1"/>
            </div>
        </div>
        <div class="flex-row d-flex w-100 mb-2">
          <button class="btn btn-secondary no-wrap-btn">
            Apply Filters
          </button>
        </div>

      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr className="table-secondary">
            <th className="align-middle">Student Name</th>
            {assignments.map((assignment) => (<th className="text-center">{assignment.title}<div style={{fontSize: "12px"}}>Out of 100</div></th>))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td className="text-center align-middle">{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;