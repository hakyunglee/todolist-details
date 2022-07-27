// import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Form } from './components/form/Form';
import { List } from './components/list/List'
import { useState } from "react";
//import { getValue } from '@testing-library/user-event/dist/utils';


function App() {

  function App() {
    const [inputs, setInputs] = useState({
      username: "",
      email: "",
    });
    const [users, setUsers] = useState([
      {
        id: 1,
        username: "cocoon",
        email: "asd123@gmail.com",
      },
      {
        id: 2,
        username: "ultra",
        email: "qwe555@example.com",
      },
      {
        id: 3,
        username: "hozae",
        email: "zxc789@example.com",
      },
    ]);
  
    const { username, email } = inputs;
    const nextId = useRef(4);
  
    const onChange = (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    };
  
    const onCreate = () => {
      const user = {
        id: nextId.current,
        username,
        email,
      };
  
      setUsers([...users, user]);
      // 또는 setUsers(users.concat(user));
  
      setInputs({
        username: "",
        email: "",
      });
      nextId.current += 1;
    };
  
    return (
      <>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        ></CreateUser>
        <UserList users={users}></UserList>
      </>
    );
  }
  

  return (
    <div className="App">
      <Header />
      <Form />
      <List />
      {/* {todo}
      {setTodo} */}
    </div>
  );
}

export default App;


