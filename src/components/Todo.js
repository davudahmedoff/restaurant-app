import React from 'react';
import { useState } from 'react';

const Todo = () => {
    const [todos, setTodos]=useState([]);
    const[todo,setTodo]=useState("");

    const sumbitForm=(e)=>{
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }
    
    const chnageInput=(e)=>{
        setTodo(e.target.value);


    }
    


  return (
    <> 
      <form onSubmit={sumbitForm} style={{padding:"5rem"}}>
        <input type='text' value={todo}
        placeholder='Add name' onChange={chnageInput}/>
        <button disabled={!todo} className='btn-rezervation' type='submit'>Add</button>
      </form>
      <ul>
        {todos.map((todo,index)=>(
            <li style={{border:"1px solid black",padding:"20px",margin:"20px",display:"flex",justifyContent:"space-between"} } key={index}>{todo}  </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
