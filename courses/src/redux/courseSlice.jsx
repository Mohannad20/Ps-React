import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const addCourseToApi = createAsyncThunk(
  "courses/addCourseToApi",
  async (course, { rejectWithValue }) => {
    try {
      // console.log("Sending course data to API:", course); // Debug log
      const response = await axios.post(
        "http://localhost:3002/courses",
        course
      );
      // console.log("Response from API:", response.data); // Debug log
      return response.data;
    } catch (error) {
      // console.error("Error in addCourseToApi:", error); // Debug log
      return rejectWithValue(error.response.data);
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    mode: true,
    error: null,
  },
  reducers: {
    setCourse(state, action) {
      state.courses = action.payload;
    },
    addCourse(state, action) {
      const newCourse = { ...action.payload, id: uuidv4() };
      state.courses.push(newCourse);
    },
    removeCourse(state, action) {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
    },
    updateCourse(state, action) {
      const index = state.courses.findIndex(
        (course) => course.id === action.payload.id
      );
      state.courses[index] = action.payload;
    },
    toggleMode(state) {
      state.mode = !state.mode;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCourseToApi.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })
      .addCase(addCourseToApi.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setCourse, addCourse, removeCourse, updateCourse, toggleMode } = courseSlice.actions;
export default courseSlice.reducer;
