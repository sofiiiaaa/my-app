import React from "react";


const Form = ({setInputText, todos ,setTodos,inputText, setStatus}) =>{     //or you can create a component also like this: function Form(){}
  //here I can write javascript code function etc.. and I'm going write something taht allow Form in the App.js to change (to react to this).  
  const inputTextHandler = (e) => {    
    setInputText(e.target.value)    
  };
  const submitTodoHendler = (e) =>{
    //console.log("hey"); //for now when we push the plus button it refresh the page but we don't want this default behaviour so:
    e.preventDefault();  //now it doesn't go away. Now we have to create a new Object that we want to add.
    setTodos([ 
      ...todos, //sperad todos= if I have some todos, pass it.
      {text:inputText, completed:false, id:Math.random()* 1000}  //we just create an Object. Now we create that everytime that I click on plus and it save the sting in this object, the inputbox be cleaned for writing again.
    ]);
    setInputText(""); //to reset the inputText into a empty string. but for that to work we have to add a value where we want it to work.
                      //now we want to add what we added to the object to an other component in the todoList,js part. to show it in a box.
  };
  const statusHandler = ((e)=>{
    setStatus(e.target.value) //now we have to link that in the correct place.(with onChange). so everytime I click on all, or the other options of the list thier string appire as selected.
  })
  return(   //onchange={} so every time inputTextHandler changes the function is ran . It is how to event events (e) to a button.
        <form>
      <input value={inputText} onChange= {inputTextHandler} type="text" className="todo-input" /> 
      <button onClick= {submitTodoHendler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;