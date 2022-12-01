import { useState } from 'react';
import './AddEmployee.css'

const AddEmployee = ({ onAdd }) => {
  const [title , setTitle]=  useState('');
  const submitForm=(event)=>{
    event.preventDefault()
    onAdd({title})//نفهمیدم
    setTitle('')
  }
    return (
        <div >
            <form className='add-employee-form' onSubmit={submitForm}>
                <div className='form-control'>
                   <input 
                   type="text" 
                   placeholder='Add Employee' 
                   value={title}
                   onChange={(e)=>setTitle(e.target.value)}
                   />
                </div>
                <button type='submit' className='form-btn'>Add</button>
            </form>
        </div>
    );
}

export default AddEmployee;