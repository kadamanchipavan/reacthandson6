import React from 'react'
import Table from './Table'
import {useNavigate} from 'react-router-dom'

const Students = () => {
  const navigate=useNavigate();
  const studentadd=()=>{
    navigate('/AddStudents')
  }

  return (
    <div>
      <div id="studentsflex">
        <div>Students Details</div>
        <button id='stuAddBtn' onClick={studentadd}>Add new student</button>
      </div>
      <Table/>
    </div>
  )
}

export default Students