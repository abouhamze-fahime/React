
import './App.css';
import Employee from './Components/Employee';
import {useState} from 'react';

function App() {
  const [role , setRole]=useState('dev');

  const showEmployees = true;
  return (
    <div className="App">
      {console.log('inside the return')}
      {showEmployees ?
        (
          <>
          <input type="text" 
          onChange={(e)=>{
               console.log(e.target.value);   
               setRole(e.target.value);    
          }}
          />
            <Employee name=" fahime" role="admin"/>
            <Employee name=" Arash" role={role}/>
            <Employee name=" Nima" />
          </>
        )
     :
     (
      <p>You cannot see the employees</p>
     )
    }
    </div>
  );
}

export default App;
