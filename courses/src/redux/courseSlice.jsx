import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name : 'courses',
    initialState : {
        courses : [],
        mode : false,
    },
    reducers: {
        setCourse(state, action){
            state.courses = action.payload
        },
        addCourse(state, action){
            const exitsCourse = state.courses.some(course => course.id === action.payload)
            if (!exitsCourse) {   
                state.courses.push(action.payload)
            }
        },
        removeCourse(state, action){
            state.courses = state.courses.filter(course => course.id !== action.payload)
        },
        updateCourse(state, action){
            const index = state.courses.findIndex(course => course.id === action.payload.id)
            state.courses[index] = action.payload
        },
        toggleMode(state){
            state.mode = !state.mode
        }
    }
})
export const { setCourse, addCourse, removeCourse, updateCourse, toggleMode } = courseSlice.actions
export default courseSlice.reducer