import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminComponent/AdminHeader'
import FireDb from '../Fbconn';

const AdminContactPage = () => {
  var [obj, setObj] = useState([])
  var [arr, setArr] = useState([])
  useEffect(() => {
    FireDb.child('ContactUsPage').on('value', (snapshot) => {
      const fetchData = (snapshot.val());
      if (fetchData) {
        const dataArray = Object.entries(fetchData).map(([key, value]) => ({
          id: key,
          ...value
        }))
        setObj(dataArray)
      }
      else
        setObj([])
    })
  }, [])
  useEffect(() => {
    FireDb.child('HelpSection').on('value', (snapshot) => {
      var Data = snapshot.val()
      console.log(Data);

      if (Data) {
        const fetchData = Object.entries(Data).map(([key, value]) => ({
          id: key,
          ...value
        }))
        setArr(fetchData)
      }
      else {
        setArr([])
      }
    })
  }, [])

  function dlt(id) {
    if (window.confirm("Are you sure you want to delete this message?")) {
      FireDb.child(`ContactUsPage/${id}`).remove((err) => {
        if (err) {
          alert('Failed to delete')
        }
        else {
          alert('Delete Successfully')
        }
      })
    }

  }
  function dlte(id){
   if (window.confirm("Are you sure you want to delete this message?")) {
      FireDb.child(`HelpSection/${id}`).remove((err) => {
        if (err) {
          alert('Failed to delete')
        }
        else {
          alert('Delete Successfully')
        }
      })
    }

  }
  return (
    <div>
      <AdminHeader />
      <br /> <br />
      <h2 style={{ fontSize: '40px' }} >Contact Messages</h2> <br /> <br />
      <table border={4} >
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>

          {
            obj.map((Data, index) => (
              <tr key={index}>
                <td>{index + 1 + '.'}</td>
                <td>{Data.Name}</td>
                <td>{Data.Email}</td>
                <td>{Data.Subject}</td>
                <td>{Data.Message}</td>
                <td><button onClick={() => dlt(Data.id)} style={{ fontSize: '15px' }} >Delete</button></td>
              </tr>
            ))
          }

        </tbody>
      </table> <br /><br /> <br />
      <div>
        <h1 style={{ fontSize: '40px', textAlign: 'center' }} >Help Request</h1> <br /><br />
        <table>
          <thead>
            <tr>
              <th>Messages</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {
              arr.map((Data,index)=>(
              <tr key={index}>
                <td>{Data.Name}</td>
                <td><button onClick={() => dlte(Data.id)} style={{ fontSize: '15px'}} >Delete</button></td>
              </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default AdminContactPage