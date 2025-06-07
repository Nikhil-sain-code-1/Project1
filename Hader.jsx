import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Hader = () => {
    const [color, setColor] = useState('#2f4f4f');
    var navigate = useNavigate()


    function login() {
        navigate('/Login')
    }

    return (
        <div>
            <div className="progress-bar" style={{ backgroundColor: color }}>
                <div className="progress-fill" />
                <div className="button-group">
                    <ul>
                        <Link to="/" >Home</Link>
                        <Link to="/About" >About</Link>
                        <Link to="/Gallery" >Gallery</Link>
                        <Link to="/Contact" >Contact</Link>
                        <Link to="/Help" >Help</Link>

                    </ul>
                    <span> <button className='Login-btn' onClick={login} >Login</button> </span>

                </div>
            </div>
        </div>
    );
};

export default Hader;
