import React, { useState } from 'react'
import Hader from '../UserComponent/Hader'
import UpperHeader from '../UserComponent/UpperHeader'
import FireDb from '../Fbconn'


const UserHelpPage = () => {
  var [obj, setObj] = useState({})
  function Save() {
     FireDb.child('HelpSection').push(obj,(err)=>{
      if(err){
        alert('Something went wrong')
      }
      else
      alert('thanks for Contact us...')
     })
  }
  function set(e) {
    setObj({[e.target.name]:e.target.value})
  }
  return (

    <div>
      <UpperHeader />
      <Hader /> 
      <div className="help-container">
        <div className="help-content-wrapper">
          <h2 className="help-title">Need Help? We're Here for You!</h2>
          <p className="help-subtitle">
            If you’re facing any issues or need assistance using our management system, you’re in the right place.
            Explore FAQs, guides, or contact our support team.
          </p>

          <div className="help-section">
            <h3>Frequently Asked Questions</h3>
            <textarea onChange={set} className='Text-area' name="Name" id=""></textarea>
            <br /> <br />
            <button onClick={Save} style={{ marginLeft: '40%', color: 'green', fontSize: '20px', fontFamily: 'unset' }} >Done</button>

          </div>

          <div className="help-section">
            <h3>Contact Support</h3>
            <p>📧 Email: support@example.com</p>
            <p>☎ Phone: +91-98765-43210</p>
            <p>⏱ Support Hours: Mon–Fri, 10 AM to 6 PM</p>
          </div>
        </div>
      </div>



    </div>
  )
}

export default UserHelpPage