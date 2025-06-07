import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLoginCmp = () => {
  var [Id, setId] = useState()
  var [Pwd, setPwd] = useState()
  var navigate=useNavigate()
  function Login(e) {
  if(Id==='Admin' && Pwd==='Admin1234' ){
    alert("Login Succesfully")
     navigate('/AdminContact')
  }
  else{
    alert('Wrong ID or Password')
  }
  
  }
  function Set1(e) {
    setId(e.target.value)
  }
  function Set2(e) {
    setPwd(e.target.value)
  }
  return (
    <div className='Login-div' >
      <div className='Login-inner' >
        <h4 style={{ color: "white" }} >Enter Id:</h4>
        <input className='Login-inputs' onChange={Set1} type="text" name="" id="" /> <br /> <br />
        <h4 style={{ color: "white" }} >Enter Password:</h4>
        <input className='Login-inputs' onChange={Set2} type="text" name="" id="" /><br /> <br />
        <button className='Admin-Login-btn' onClick={Login} >Login</button>
      </div>
    </div>
  )
}

export default AdminLoginCmp