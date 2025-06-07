import React, { useState } from 'react'
import Hader from '../UserComponent/Hader'
import UpperHeader from '../UserComponent/UpperHeader'
import FireDb from '../Fbconn';

const UserAboutPage = () => {

  return (
    <div className='About-Container' >
      <UpperHeader />
      <Hader /> <br />

      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-subtitle">
        "Empowering organizations with innovative management solutions to streamline operations,<br /> boost efficiency, and drive sustainable growth through smart strategies."
        </p>

        <div className="about-content-wrapper">
          <div className="about-text-box">
            <h3>
              We're here to get as many people <span className="highlight">moving</span> as possible.
            </h3>
            <p style={{color:'slateblue'}} >
            Our management platform empowers businesses to organize, monitor, and optimize their daily operations with ease. We offer intelligent tools that enhance team productivity, support data-driven decisions, and simplify complex workflows—enabling companies to grow faster, operate smarter, and stay competitive in today’s ever-evolving business environment.
            </p>
            <p> <br />
             We deliver smart, scalable management solutions that improve efficiency, enhance collaboration, and drive measurable success across all business areas.
            </p>
          </div>
          <div className="about-image-box">
            <img src="Images/StudentPic1.jpg" alt="Team" className="about-image" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserAboutPage