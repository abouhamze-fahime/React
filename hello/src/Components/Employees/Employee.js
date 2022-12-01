import './Employee.css'

const Employee = ({ emp1 ,onDeleteE}) => {

    return (
        <div className='Employee'>
            <div> {emp1.title} </div>
            <div>
                <button className='btn' onClick={()=>onDeleteE(emp1.id)}>Delete</button>
            </div>
        </div>
    );
}

export default Employee;