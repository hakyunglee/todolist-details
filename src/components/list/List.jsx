import React from "react";
import "./style.css"


const List = ({users, setUsers}) => {
    const onRemove = (id) => {
        setUsers(users.filter((users) => users.id !== id));
      };
    
      
      console.log(users.Id);
    // const deleteHandler = (todoId) => {
    //     const newTodos = todos.filter((todo) => {
    //         return todo.id !== todoId;
    //     });

    // }
    
    // const onRemove = id => {

    //     setTodos(todos => todos.filter(todos.id !== id));
    // }

    
//     function List({users, setUsers}) {
//         const onDeleteHandler = (userId) => {
//             return users.id !== users.id
//         }
//     }

    

    return (
        <div className="list-container">
            <h2 className="list-title">Working.. 🔥</h2>
                <div className="list-wrapper">
                    {users.map ((users) => {
                        return (
                            <div key={users.Id} className="todo-container">
                                <div>
                                    <h2 className="todo-title">{users.title}</h2>
                                    <div>{users.body}</div>
                                </div>
                                <div>
                                    <button className="todo-delete-button button" onClick={() => {onRemove(users.id)}}>삭제하기</button>
                                    <button className="todo-complete-button button" onClick={()=>{users=true}}>완료</button>
                                </div>
                            </div>
                        );
                    })}
                </div>


            <h2 className="list-title">Done..!</h2>
                <div className="list-wrapper">
                    <div className="todo-container">
                        <div>
                            <h2 className="todo-title">리액트 공부하기</h2>
                            <div>리액트 기초를 공부해봅시다.</div>
                        </div>
                        <div>
                            <button className="todo-delete-button button" onClick={() => {onRemove(users.id)}}>삭제하기</button>
                            <button className="todo-complete-button button">취소</button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
        
}
  export {List};



