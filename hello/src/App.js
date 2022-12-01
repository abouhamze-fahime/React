import {useState} from 'react'
import EmployeeList from "./Components/EmployeeList/EmployeeList";
import AddEmployee from './Components/AddEmployee/AddEmployee'

const App=()=> {

 const [emp , setEmps]= useState(
  [
    {id:1 , title: "Fahime"},
    {id:2 , title: "Sara"} , 
    {id:3 , title: "Elnaz"}
  ]
 );
 
 const addEmployee=(title)=>{
 const id = Math.floor(Math.random()*10000)
 const newEmp = {id , ...title}
 setEmps([...emp , newEmp]) 
 }


 const deleteEmployee=(empId)=>{
  setEmps(emp.filter((item)=> item.id !== empId))
 };



   return (
    <div  className='container'>
         <AddEmployee onAdd={addEmployee}/>
         <EmployeeList emplist={emp} onDelete={deleteEmployee} addEmployee={AddEmployee}/>   
    </div>
  );
}

export default App;
