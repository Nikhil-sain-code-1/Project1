import React from 'react'
import { useNavigate } from 'react-router-dom'

const UpperHeader = () => {
  var navigate = useNavigate()
  function Contact() {
    navigate('/Contact')
  }
  return (
    <div className='Upper-Header' >
      <div className='Inner-Logo-Div'>

        <img className='Logo' src="/Images/LogPic.png" alt="" />
      </div>
      <div className='Heading-Div' >
        <h1>Institute of Management, Rohtak</h1>  
      </div>
      <div className='Icons-div' >
        <img className='Iconss' src="/Images/instagram.png" alt="" />
        <img className='Iconss' src="/Images/facebook.png" alt="" />
        <img className='Iconss' src="/Images/Youtube.png" alt="" />
      </div>
      {/* <div className='Contact-div' >
        <button className='contact-btn' onClick={Contact} >Contact Us</button>
      </div> */}

    </div>
  )
}

export default UpperHeader