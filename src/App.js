// import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Form } from './components/form/Form';


//import { getValue } from '@testing-library/user-event/dist/utils';


function App() {

    
    
  
    return (
      <>
      <div className="App">
        <Header />
        <Form />
        
        
        {/* <Form
          title={title}
          body={body}
          onChange={onChange}
          onCreate={onCreate}
        ></Form>
        <UserList todos={todos}></UserList> */}
      </div>
      </>
    );
  }
  
export default App;


