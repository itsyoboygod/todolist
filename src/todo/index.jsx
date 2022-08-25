import React from "react";
import { useState } from "react";
import "./style.css"

const TodoList = () => {

    const [todoList, setTodoList] = useState([])
    const [newTask, setnewTask] = useState("")

    const handleChange = (e) => {
        setnewTask(e.target.value)
    }

    const addTask = (e) => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false
        }
        setTodoList([...todoList, task])

    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => {return task.id !== id}))
    }

    const completedTask = (id) => {
        setTodoList(
            todoList.map((task) => {
                if(task.id  === id){
                    return {...task, completed: true}
                } else {
                    return task
                }
            })
        )
    }

    // const nulldata = <p>Wow so empty !! ¯\_(ツ)_/¯<span style={{"fontSize":"10px", "opacity":".2"}}>null data | but drink water tho ;) !</span></p>
    const nulldata = <span style={{"fontSize":"10px", "opacity":".2"}}>null data :( | but drink water tho ;) !</span>

    return(
        <>
            <div className="todoList">
                <div className="title-todo">
                    <h1>Todo List App</h1>
                </div>
                <div className="todo-body">
                    <div className="todo-body-title">
                        <h1>What are the plans for today ?</h1>
                    </div>
                    <div className="addTask">
                        <div className="addTask-input">
                            <input placeholder="type here and press Add+" required onChange={handleChange}/>
                        </div>
                        <div className="addTask-btn-add">
                            <button onClick={addTask}>Add+</button>
                        </div>
                    </div>
                    <div className="todo">
                        {/* <div className="nulldata">
                            <p>{nulldata}</p>
                        </div> */}
                    <ul>
                        {todoList.map((task)=>{
                            return (
                                    <li className={`row-task ${task.completed ? 'task-done' : 'row-task'}`}>
                                        <div className="task-info"><p>#{task?.id}</p><p>{task.taskName ? task.taskName : nulldata}</p></div>
                                        {/* <div className="task-info"><p>#{task?.id}</p><p>{task.taskName ? task.taskName : "null | but drink water tho ;)!"}</p></div> */}
                                        <div className="btns-del-check">
                                            {/* <input type="date"/> */}
                                            <button onClick={() => deleteTask(task.id)}> ✕</button>
                                            <button onClick={()=> completedTask(task.id)}> ✓ </button>
                                        </div>
                                    </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


export default TodoList