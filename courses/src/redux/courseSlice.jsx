import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name : 'course',
    initialState : {
        courses : []
    },
    reducers: {
        addCourse(state, action){
            state.courses.push(action.payload)
        },
        removeCourse(state, action){
            state.courses.filter(course => course.id !== action.payload)
        },
    }
})
export const { addCourse, removeCourse } = courseSlice.actions
export default courseSlice