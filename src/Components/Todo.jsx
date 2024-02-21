import React from 'react'
import "./Todo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");


    const handleChange = (event) => {
        setInput([event.target.value]);
        event.preventDefault();

    }
    // Add Task
    const handleAdd = (event) => {
        event.preventDefault();
        if (input.length > 0) {
            setTodo([...todo, input])
            setInput("");
        }
    }

    //Remove Task
    const handleRemove = (index) => {
        setTodo(todo.filter((_, id) => id !== index))
    }
    return (
        <div className="todo-main">
            <h1><span style={{ color: "rgb(218,60,87)" }}>To-Do-List  </span>App Using React</h1>

            <form onSubmit={handleAdd}>
                <div className="todo-secondary">
                    <div className="todo">
                        <input type="text" onChange={handleChange} value={input} placeholder='Enter New Task' />
                        <button onClick={handleAdd}>Add Task</button>

                    </div>
                    <h3 className="no-task-text">{todo.length <= 0 ? "Please Add Task To Do" : ""}</h3>
                </div>
            </form>

            <div className="lists">
                {
                    todo.map((data, index) => (
                        <ol key={index} className="todo-lists">
                            <li >{data}</li>
                            <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => handleRemove(index)} />
                        </ol>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo