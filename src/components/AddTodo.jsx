import React from "react";

function AddTodo(props)
{


// const [inputText, setInputText] = useState("");
// const [todos, setTodos] = useState([]);
// const [status, setStatus] = useState("");
// const [filteredTodos, setFilteredTodos] = useState([]);

// function inputTextHandler(event)
// {
//     const input = event.target.value;
//     setInputText(input);
   
// }

// function submitTodoHandler(event)
// {
//     setTodos([
//         ...todos, {
//             text: inputText,
//             completed: false,
//             id: Math.random()*1000
//         }
//     ]);
//      event.preventDefault();
//      setInputText("");
// }

// function handlestatus(event)
// {
//     const currentstatus = event.target.value;
//     setStatus(currentstatus);
//     console.log(status);
// }

// function handlefilteredTodos()
// {
//     switch (status) {
//         case "completed":
//             setFilteredTodos(todos.filter(todo => todo.completed == true));
//             break;
//         case "uncompleted":
//             setFilteredTodos(todos.filter(todo => todo.completed == false));
//             break;
//         default:
//             setFilteredTodos(todos);
//             break;
//     }
// }

// useEffect(() => {
//     handlefilteredTodos()
// }, [todos, status]);


    return (
        <div className = "sub-notearea">
            <form className="form form1">
            <input onChange={props.inputTextHandler} className="add-input"  type="text" value={props.inputText}></input>
           <button className="add-btn" onClick={props.submitTodoHandler} type="submit"><i className="fa fa-plus" aria-hidden="true"></i></button>
        </form>
        <select  className = "drop-down" onChange={props.handlestatus}>
            <option >All</option>
            <option >completed</option>
            <option >uncompleted</option>
        </select>

         {/* {props.filteredTodos.map(todo => {
             return (
                 <Todos 
                     todo = {todo}
                     id = {todo.id}
                     key = {todo.id}
                     setTodos = {props.setTodos}
                     todos = {props.todos}
                     text = {todo.text}
                 />
             )
         }
         )} */}
        </div>
    )
}

export default AddTodo;