import React,{useState, useEffect} from "react";  //{} doest mean that we can import something specific from the react library
import './App.css';
//importing Form.js from Components
import Form from "./components/Form";
//importing Todolist.js from component
import TodoList from "./components/TodoList";
function App() {
  //state stuff
  const [inputText, setInputText] = useState("");  //I want to change this state value
  const [todos, setTodos] = useState([]); //  ([]) because we're gonna have an array of objects in here
  const [status, setStatus] =useState("all"); //for the filter. I'll put "all" as default.
  const [filteredTodos, setFilteredTodos] =useState([]); //to be able to filter my list of todos with all, or completed or uncompleted.
  
  //RUN ONCE when the app start
  useEffect(()=>{
    getLocalTodos();
  },[]);
 
  //USE EFFECT
  useEffect(()=>{
    filterHandler(); //to make it run here. But that doesn't show yet..it works but the user can't see it.
    saveLocalTodos(); //to make it run here.
  },[todos, status]); //if just  [] it will render that just the first time. If you put something in it it will render everytime this something change.
  //function and events
   const filterHandler =() =>{  //where status is completed or uncompleted or default
     switch(status){
       case "completed":
      setFilteredTodos(todos.filter(todo=> todo.completed === true))
      break;
        case "uncompleted":
          setFilteredTodos(todos.filter(todo=> todo.completed === false))
      break;
      default: //for the default case:all
      setFilteredTodos(todos);
      break; //now..where I run all of this switch? everytime I click submit(btn plus) and that I change my filter. We have to use: useEffect. it's allow tou to lanch a function everytime a peace of state changes. REMEMBER: I HAVE TO IMPORT IT!!
     } 
   };
   
   //save to local 
const saveLocalTodos=()=>{ 
      localStorage.setItem("todos", JSON.stringify(todos)); //we are adding things to the local store.

  }; //but with that if we refresh ww'll start with an empty array and we have to add all the things we have to do again...so:

const getLocalTodos =()=>{  //here we're checking if we have something in the local store of not.
  if(localStorage.getItem("todos") ===null) {
    localStorage.setItem("todos", JSON.stringify([]));
    } else{
      let todoLocal=  JSON.parse(localStorage.getItem("todos")); //we tthat we maintain in the sote the informations also when we refresh the page.
      setTodos(todoLocal);
    }
};
  return (
    <div className="App">
      <header>
     <h1>Sofia's Todo List</h1>
      </header>
      <Form  
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText= {setInputText}
        setStatus={setStatus}     
        />  
      <TodoList 
       filteredTodos={filteredTodos}
       todos={todos} 
       setTodos={setTodos}
       />
    </div>
  );
}

export default App;
