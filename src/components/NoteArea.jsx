import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
function NoteArea()
{

const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);
const [status, setStatus] = useState("");
const [filteredTodos, setFilteredTodos] = useState([]);

function inputTextHandler(event)
{
    const input = event.target.value;
    setInputText(input);
    console.log(input);
   
}

function submitTodoHandler(event)
{
    setTodos([
        ...todos, {
            text: inputText,
            completed: false,
            id: Math.random()*1000
        }
    ]);
    console.log(todos);
     event.preventDefault();
     setInputText("");
}

function handlestatus(event)
{
    const currentstatus = event.target.value;
    setStatus(currentstatus);
    console.log(status);
}

function handlefilteredTodos()
{
    switch (status) {
        case "completed":
            setFilteredTodos(todos.filter(todo => todo.completed === true));
            break;
        case "uncompleted":
            setFilteredTodos(todos.filter(todo => todo.completed === false));
            break;
        default:
            setFilteredTodos(todos);
            break;
    }
}

useEffect(() => {
    handlefilteredTodos();
}, [todos, status]);


    return (
        <div className="note-area">
            <Heading />
            <AddTodo 
                inputTextHandler = {inputTextHandler}
                submitTodoHandler = {submitTodoHandler}
                inputText = {inputText}
                handlestatus = {handlestatus}
                setTodos = {setTodos}
                todos = {todos}
                filteredTodos = {filteredTodos}
            /> 

             {filteredTodos.map(todo => {
             return (
                 <Todos 
                     todo = {todo}
                     id = {todo.id}
                     key = {todo.id}
                     setTodos = {setTodos}
                     todos = {todos}
                     text = {todo.text}
                 />
             )
         }
         )}
        </div>
    )
}

export default NoteArea;