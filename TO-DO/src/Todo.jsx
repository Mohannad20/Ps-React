import React, { useState } from 'react'
import {LucideEdit2, MoonStar, SunDim, Trash2} from 'lucide-react'

export default function Todo() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const [editId, SetEditId] = useState(null)
    const [editTask, setEditTask] = useState('')
    const [darkMode, setDarkMode] = useState(false)

    const handleAddBtn = () => {
        if (newTask.trim()) {
            setTasks(t => [...t, {text: newTask, done: false}])
            setNewTask('')
        }
    }
    const hanletask = (event) => {
        setNewTask(event.target.value)
    }
    const handleDelBtn = (index) => {
        setTasks(tasks.filter((_,i) => i !== index))
    }
    const handleEditBtn = (index) => {
        SetEditId(index)
        setEditTask(tasks[index].text)
    }
    const handleSavebtn = (index) => {
        if (editTask.trim()) {
            
            const editedTasks = tasks.map((task, i) => i === index ? {...task, text: editTask} : task)
            setTasks(editedTasks)
        }
        SetEditId(null)
    }
    const toggleTodo = (index) => {
        setTasks(
            tasks.map((task,i) => i === index ? {...task, done: !task.done} : task)
        )
    }
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)   
        document.body.classList.toggle('dark-mode')
    }
  return (
    <>
    <div onClick={toggleDarkMode}>

    {darkMode? <SunDim size={20} id='modeIcon'/> : <MoonStar id='modeIcon' size={18}/>}
    </div>
    
    
    <div className='todo-list'>
        <h1>Todo List</h1>
        <div>
        <input type="text" placeholder='write a list' value={newTask} onChange={hanletask}/>
        <button onClick={handleAddBtn} id='btns'>Add</button>
        </div>

        <ul>
            {tasks.map((el,index) => <li key={index}>
                {editId !== index ? (
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
                    <input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)}  />
                    <button onClick= {()=> handleSavebtn(index, el)} id='btns'>Save</button>
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
