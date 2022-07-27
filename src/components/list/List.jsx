import React from "react";
import "./style.css"


const List = ({users}) => {

    return (
        <div className="list-container">
            <h2 className="list-title">Working.. 🔥</h2>
                <div className="list-wrapper">
                    {users.map ((users, index) => {
                        //  <User user={user} key={user.id}/>


                        return(
                            <div key={users.Id} className="todo-container">
                        <div>
                            <h2 className="todo-title">{users.title}</h2>
                            <div>{users.body}</div>
                        </div>
                        <div>
                            <button className="todo-delete-button button" >삭제하기</button>
                            <button className="todo-complete-button button">완료</button>
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
                            <button className="todo-delete-button button">삭제하기</button>
                            <button className="todo-complete-button button">취소</button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
  };

  export {List};



