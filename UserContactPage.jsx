import React, { useState } from 'react'
import Hader from '../UserComponent/Hader'
import UpperHeader from '../UserComponent/UpperHeader'
import FireDb from '../Fbconn';


const UserContactPage = () => {
    const [obj, setObj] = useState({
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
    })
    function set(e) {
        setObj({ ...obj, [e.target.name]: e.target.value });
    }
    function save(e) {
        e.preventDefault();
        const { Name, Email, Subject, } = obj;
        if (!Name || !Email || !Subject) {
            alert('fill all the inputs')
        }
        else {
            FireDb.child('ContactUsPage').push(obj, (err) => {
                if (err) {
                    alert('Something Went Wrong')
                }
                else
                    alert('Thanks for Contact Us')
            })
        }

    }
    return (
        <div>
            <UpperHeader />  
            <Hader />
            <div className="contact-container">
                <h2 style={{color:'black'}} >Contact Us</h2>

                <div className="contact-wrapper">

                    <div className="contact-form">
                        <form>
                            <input onChange={set} name='Name' type="text" placeholder="Your Name" required />
                            <input onChange={set} name='Email' type="email" placeholder="Your Email" required />
                            <input onChange={set} name='Subject' type="text" placeholder="Subject" />
                            <textarea onChange={set} name='Message' placeholder="Your Message" rows="5"></textarea>
                            <button type="submit" onClick={save} >Send Message</button>
                        </form>
                    </div>
                        
                    <div className="contact-info">
                        <h3>Get in Touch</h3>  <br />
                        <p><strong>Address:</strong> 123 Business Street, Rohtak, India</p> <br />
                        <p><strong>Email:</strong> support@yourcompany.com</p> <br />
                        <p><strong>Phone:</strong> +91-9876543210</p> <br />
                        <div className="social-icons">
                            <a href="#">🌐</a>
                            <a href="#">📘</a>
                            <a href="#">📸</a>
                            <a href="#">💼</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserContactPage

