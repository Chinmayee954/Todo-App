import React, { useState } from "react";
import ReactDOM from "react-dom";

function Todos(props)
{

    function deleteTodo()
    {
       props.setTodos(props.todos.filter(el => el.id !== props.todo.id));
    }
    
    function completeHandler()
    {
        props.setTodos(props.todos.map(item => {
            if(item.id === props.todo.id)
            {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return(
             <ul className="list">
                <div className="list-item">
                    <li className={`list-item1 ${props.todo.completed ? "completed" : null}`} >🕒 {props.text} 
                <button className = "check-btn" onClick={completeHandler}>
                    <i className="fa fa-check" aria-hidden="true"></i>
                </button>
                <button className ="trash-btn" onClick = {deleteTodo}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                </li>
                </div>
             </ul>
    )
}

export default Todos;