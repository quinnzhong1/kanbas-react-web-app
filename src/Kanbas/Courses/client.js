import axios from "axios";

export const findAllCourses = async () => {
    const response = await axios.get(`http://localhost:4000/api/courses`);
    return response.data;
    // const promise = axios.get(URL);
    // promise.then((response) => {
    //   console.log(response.data);
    //   setCourses(response.data);
    // })
  };

export const fetchCourse = async (id) => {
  const response = await axios.get(`http://localhost:4000/api/courses/${id}`);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(
    `http://localhost:4000/api/courses/${id}`
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `http://localhost:4000/api/courses/${course._id.$oid}`,
    course
  );
  return response.data;
};

export const addNewCourse = async (course) => {
  const response = await axios.post(
    "http://localhost:4000/api/courses",
    course
  );
  return response.data;
};