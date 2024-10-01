import React, { useReducer, useState } from 'react'
import {LucideEdit2, MoonStar, SunDim, Trash2} from 'lucide-react'

const intialState = {
    tasks : [],
    editId : null,
    editTask : '',
    darkMode : false
}

const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return{
                ...state, tasks : [...state.tasks, {text : action.payload, done : false }]
            }
        case 'DELETE' :
            return {
                ...state, tasks : state.tasks.filter((_,i) => i !== action.payload)
            }
        case 'SET_ID':
            return {
                ...state, editId : action.payload.index, editTask : action.payload.taskText
            }
        case 'SET_EDIT_TASK':
            return{
                ...state, editTask : action.payload
            }
        case 'SAVE':
            return{
                ...state, tasks : state.tasks.map((task, i) => 
                i === action.payload.index ? {...task, text: action.payload.editTask } : task
            ) , editId : null, editTask : ''
            }
        case 'TOGGLE_TODO':
            return{
                ...state, tasks : state.tasks.map((task, i) => i === action.payload ? {...task, done: !task.done} : task)
            }
        case 'TOGGLE_DARK_MODE':
            return{
                ...state, darkMode : action.payload
            }
        default:
            return state;
    }
}

export default function Todo() {
    const [newTask, setNewTask] = useState('')
    // const [darkMode, setDarkMode] = useState(false)
    const [state, dispatch] = useReducer(Reducer, intialState)

    const handleAddBtn = () => {
        if (newTask.trim()) {
            dispatch({type : 'ADD_TASK', payload : newTask})
            setNewTask('')
        }
    }
    const hanletask = (event) => {
        setNewTask(event.target.value)
    }
    const handleDelBtn = (index) => {
        dispatch({type : 'DELETE' , payload: index})
    }
    const handleEditBtn = (index) => {
        dispatch({type : 'SET_ID', payload : {index, taskText : state.tasks[index].text}})
    }
    const handleSaveBtn = (index) => {
        if (state.editTask.trim()) {
            dispatch({type : 'SAVE', payload : {index, editTask : state.editTask}})
        }
    }
    const toggleTodo = (index) => {
        dispatch({type: 'TOGGLE_TODO' , payload : index})
    }
    const toggleDarkMode = () => {
        // setDarkMode(!darkMode)   
        dispatch({type: 'TOGGLE_DARK_MODE', payload : !state.darkMode})
        document.body.classList.toggle('dark-mode')
    }
  return (
    <>
    <div onClick={toggleDarkMode}>
    {state.darkMode? <SunDim size={20} id='modeIcon'/> : <MoonStar id='modeIcon' size={18}/>}
    </div>
    
    <div className='todo-list'>
        <h1>Todo List</h1>
        <div>
        <input type="text" placeholder='write a list' value={newTask} onChange={hanletask}/>
        <button onClick={handleAddBtn} id='btns'>Add</button>
        </div>

        <ul>
            {state.tasks.map((el,index) => <li key={index}>
                {state.editId !== index ? (
                <div className='lists'>
                    <label style={{ opacity: el.done ? 0.6 : 1,textDecoration: el.done ? 'line-through' : 'none',transition: 'color 0.3s, text-decoration 0.3s' }}>
                    <input type="checkbox" checked={el.done} onClick={() => toggleTodo(index)}/>
                    <div className="task-text">
                        {el.text}
                    </div>
                    </label>
                </div>
                ):
                (
                <div className='lists'>
                    <input type="text" value={state.editTask} onChange={(e) => dispatch({type : 'SET_EDIT_TASK', payload : e.target.value})}  />
                    <button onClick= {()=> handleSaveBtn(index, el)} id='btns'>Save</button>
                </div>
                )}
                <div className='icons'>
                    <LucideEdit2 id='icons' size={20} onClick={() => handleEditBtn(index)}/>
                    <Trash2 id='icons' size={20} onClick={() => handleDelBtn(index)}/>
                </div>
            </li> )}
        </ul>
    </div>
    </>
  )
}
