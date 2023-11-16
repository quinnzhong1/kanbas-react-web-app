import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`;

export const findAllCourses = async () => {
    const response = await axios.get(`${COURSES_URL}`);
    return response.data;
    // const promise = axios.get(URL);
    // promise.then((response) => {
    //   console.log(response.data);
    //   setCourses(response.data);
    // })
  };

export const fetchCourse = async (id) => {
  const response = await axios.get(`${COURSES_URL}/${id}`);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(
    `${COURSES_URL}/${id}`
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `${COURSES_URL}/${course._id.$oid}`,
    course
  );
  return response.data;
};

export const addNewCourse = async (course) => {
  const response = await axios.post(
    `${COURSES_URL}`,
    course
  );
  return response.data;
};