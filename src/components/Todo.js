import React from "react";

const Todo =({text, todo, todos, setTodos}) => {
    //add events
    const deleteHandler = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id)); //if element.id doesn't metch the todo.id so it's filtered. We are compering the elements that we are clicking on to metch the one form the state.
    };
    const completeHandler =() =>{
        setTodos(todos.map((item) => {
            if (item.id ===todo.id) {  //I want to swich the completed from false to true.
                return{
                    ...item, completed:!item.completed //which is false 'cause we set it up like that. So it make sure that  the flag becaome the opposite every time I click on it
                }
            }
            return item; //if it nor match, return whatever item was.
        }));
    }
    return(  //here I'm gonna write some JSX code
        <div className="todo">
            <li className = {`todo-item ${todo.completed? "completed" : ""}`}>{text} </li> 
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>            
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;