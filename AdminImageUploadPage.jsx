import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminComponent/AdminHeader'
import FireDb from '../Fbconn';

const AdminImageUploadPage = () => {
  var [image, setImage] = useState(null)
  var [data, setData] = useState({})


  useEffect(() => {
    FireDb.child('Images').on('value', (snapshot) => {
      var Photos = (snapshot.val());
      // console.log( Photos);
      setData(Photos || {})
    })
  }, [])

  var handleFileChange = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = function () {
      // console.log(reader.result);  
      setImage(reader.result)
    }


  }

  var handleUpload = () => {
    if (!image) {
      alert('Please select an image first')
      return
    }
    else {
      FireDb.child('Images').push({ image }, (err) => {
        if (err) {
          alert('Something went wrong', err)
        }
        else {
          alert('Image Upload successfully')
        }
      })
    }

  }

  function Delet(key) {
    if (window.confirm("Are you sure you want to delete this image..")) {
      FireDb.child('Images').child(key).remove((err) => {
        if (err) {
          alert("Something went wrong while deleting.");
        } else {
          alert("Image deleted successfully.");
        }
      });
    }
  }


  return (
    <div className='Full-UplaodImagePage' >
      <div className='UploadImage'>
        <div style={{ width: '100%' }}>
          <AdminHeader />
        </div>

        <div className='UploadImage-div'>
          <input type="file" name="" id="" onChange={handleFileChange} />
          <br /><br /><br /><br />  <br /><br />
          <button className='' style={{ width: '80px', color: 'blue' }} onClick={handleUpload} >Upload</button>
        </div>
        <br /> <br />
        <div>
          <table border={2} >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Photo</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(data).map((key,index) => {
                  return (
                    <tr>
                      <td>{index+1+'.'}</td>
                      <td> <img src={data[key].image} style={{ height: "200px", width: "200px" }} alt="" /> </td>
                      <td><button onClick={() => Delet(key)} >Delete  </button></td>
                    </tr>
                  )

                })
              }

            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default AdminImageUploadPage