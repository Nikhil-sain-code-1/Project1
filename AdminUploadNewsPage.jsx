import React, { useState } from 'react'
import FireDb from '../Fbconn';

import AdminHeader from '../AdminComponent/AdminHeader'

const AdminUploadNewsPage = () => {
  
  var [obj, setObj] = useState({
    Heading:'', 
    Content:''
  })

  function set(e) {
     setObj({ ...obj, [e.target.name]: e.target.value })    

  }

  function submit(){
      FireDb.child('News').push(obj, (err) => {
         if (err) {
           console.log('Something went wrong',err);
         }
         else
           alert('Data saved succesfully')
       })
   
  }
  return (
    <div>
      <AdminHeader />
      <div className='Main-News-div'>

        <div className='Admin-News-div' >
          <h1 style={{ color: 'white' }}>Enter News Here...</h1> <br />
          <hr />
          <h3 style={{ color: 'white', marginTop: '15px' }} >Enter Heading here... </h3>

          <input name='Heading' onChange={set} style={{ marginTop: '10px',width:'250px' }} type="text" id="" /><br />

          <h3 style={{ color: 'white', marginTop: '10px' }} >Enter Content here... </h3>

          <textarea name='Content' onChange={set} style={{ height: '120px', width: '300px', marginTop: '10px' }}  id=""></textarea> <br />
          
          <button style={{marginTop: '10px',fontSize:'18px',borderRadius:'3px', backgroundColor:'white' }} onClick={submit} >Submit</button>

        </div>

      </div>
    </div>
  )
}

export default AdminUploadNewsPage