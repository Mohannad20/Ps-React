import React, { useState } from 'react'
import {LucideEdit, LucideEdit2, Trash2} from 'lucide-react'

export default function Todo() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const [editId, SetEditId] = useState(null)
    const [editTask, setEditTask] = useState('')
    const handleAddBtn = () => {
        if (newTask.trim()) {
            setTasks(t => [...tasks, {text: newTask, done: false}])
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
  return (
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
                    <label style={{ textDecoration: el.done ? 'line-through' : 'none' }}>
                    <input type="checkbox" checked={el.done} onClick={() => toggleTodo(index)}/>
                    {el.text} 
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
                <LucideEdit2 id='icons' onClick={() => handleEditBtn(index)}/>
                    <Trash2 id='icons' onClick={() => handleDelBtn(index)}/>
                </div>
            </li> )}
        </ul>
    </div>
  )
}
