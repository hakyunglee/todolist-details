import React, { useState } from "react";
import "./style.css"



const Form = (props) => {
    // const [todos, setTodos] = useState([
    //     { id : 0, title: 'asd', body : 'asd', isDone : false},
    // ]);
    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    const [todos, setTodos] = useState({
        
        body: "",
        title = ""
    });
    const {title, body} = todos
    
   const handleChange = (e) => {
    if (e.target.name === 'title'){
        setTitle(e.target.value) 
    }else {
        setBody(e.target.value)
   }
    };

    const hanelSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: hanelSubmit.length + 1, title, body, isDone: false}]);
        setTitle('');
        setBody('');
    };
    
   console.log(title,body);

    
    return (
        
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input
                value={title}
                placeholder="title"
                name="title"
                onChange={handleChange}
            />
            <input
                value={body}
                placeholder="body"
                name="body"
                onChange={handleChange}
            />


        <button className="add-button" type='submit'>추가하기</button>
        </form>
        
   )
}
  export {Form};