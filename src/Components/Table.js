import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import React , {useState, useEffect} from 'react'


function Table(){
  const[data,setData]=useState([])
  function getData(){
    axios.get('https://63d03474e52f587829ae07a7.mockapi.io/react-use')
    .then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
  }
  useEffect(()=>{
    getData();
  },[])

  function handleDelete(id){
	axios.delete(`https://63d03474e52f587829ae07a7.mockapi.io/react-use/${id}`)
	.then(()=>{
	  getData();
	})
  }
  const navigate=useNavigate();
  const setToLocalStorage=(id,name,age,course,batch)=>{
	localStorage.setItem("id",id)
	localStorage.setItem("name",name)
	localStorage.setItem("age",age)
	localStorage.setItem("course",course)
	localStorage.setItem("batch",batch)
	navigate('/Edit')
  }
  return (
	<div id='tableHead'>
		      <table className="table">
  <thead>
  <tr>	
	<th>ID</th>
	<th> Name</th>
	<th>Age</th>
	<th>Course</th>
	<th>Batch</th>
	<th>Change</th>
	<th>Delete</th>
	</tr>
  </thead>
  { data.map((eachData,index)=>{
    return(
      <tbody key={index}>
      <tr>
        <th>{eachData.id}</th>
        <td>{eachData.name}</td>
        <td>{eachData.age}</td>
        <td>{eachData.course}</td>
        <td>{eachData.batch}</td>        
        <td><button  onClick={()=> setToLocalStorage(eachData.id,eachData.name,eachData.age,eachData.course,eachData.batch)}>Edit</button></td>
        <td><button onClick={()=>handleDelete(eachData.id)}>Delete</button></td>
      </tr>
   
 </tbody>
    )
  })
}
</table>
	</div>
  )
}

export default Table