import React from "react";
//import components
import Todo from "./Todo"; //i've  just create it

const TodoList = ({todos, setTodos,filteredTodos}) =>{    
    return(
    <div className="todo-container">
     <ul className="todo-list">
        {filteredTodos.map(todo =>(  // forEach todo we are gonna enter down a new todo's component
            <Todo 
            todos={todos} 
            setTodos={setTodos}
            key={todo.id} 
            todo={todo}
            text={todo.text}/> //key=todo.id is because the key has always to be different and associated to what we want to render. Now we have to implement the delete and the check buttons. I(go to Todo.js)
        ))}
    </ul>
    </div> 
    );
};

export default TodoList;