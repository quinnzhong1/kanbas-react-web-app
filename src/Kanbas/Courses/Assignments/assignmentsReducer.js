import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: { title: "New Assignment 123" },
  };

  const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, action) => {
        state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
            ...state.assignments,
        ];
        state.assignment = initialState.assignment;
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        );
        state.assignment = initialState.assignment;
      },
      updateAssignment: (state, action) => {
        state.assignments= state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
        state.assignment = initialState.assignment;
      },
      selectAssignment: (state, action) => {
        state.assignment = action.payload;
      },
      setAssignment: (state) => {
        state.assignment = initialState.assignment;
      }
    },
  });
  
  
  export const { addAssignment, deleteAssignment,
    updateAssignment, selectAssignment, setAssignment } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;
  
  