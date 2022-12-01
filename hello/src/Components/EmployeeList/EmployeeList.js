
import Employee from '../Employees/Employee'
import './EmployeeList.css'

const Employeelist = ({emplist ,onDelete})=>{
    return (
        <div className='Employee-list'>
            {emplist.map((EmployeeItem)=>{
                 return < Employee key={EmployeeItem.id} emp1={EmployeeItem} onDeleteE={onDelete}/>         
            })}
        </div>
    )
}

export default Employeelist