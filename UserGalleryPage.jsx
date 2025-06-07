import React, { useEffect, useState } from 'react'
import Hader from '../UserComponent/Hader'
import UpperHeader from '../UserComponent/UpperHeader'
import FireDb from '../Fbconn';


const UserGalleryPage = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    FireDb.child('Images').on('value', (snapshot) => {
      const fetchData = snapshot.val()
      console.log(fetchData);

      if (fetchData) {
        var dataArray = Object.entries(fetchData).map(([key, value]) => ({
          ID: key,
          ...value
        }))
        setData(dataArray) 
      }
      else {
        setData([])
      }
    })

  }, [])

  return (
    <div>
      <UpperHeader />
      <Hader /> <br />
      <div className='Gallery-Wrapper' >
      {data.map((item) => (
          <div key={item.ID} className='Image-Div'  >
         <img className='Image-Gallery' src={item.image} alt="" />
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default UserGalleryPage