import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    const [color, setColor] = useState('#ff1493');
    
        const handleColorChange = (newColor) => {
            setColor(newColor);
        }; 
    return (
        <div>
            <div>
                <div className="progress-bar" style={{ backgroundColor: color }}>
                    <div className="progress-fill" />
                    <div className="button-group">

                        <ul>
                            <Link to={'/AdminContact'} >ShowContact</Link>
                            <Link to={'/AdminImage'} >UploadPhoto</Link>
                            <Link to={'/AdminVideo'} >UploadVideo</Link>
                            <Link to={'/AdminNews'} >UploadNews</Link>
                            <Link to={'/'} >LogOut</Link>
                        </ul>
                        {/* <button onClick={() => handleColorChange('red')}>Red</button>
                    <button onClick={() => handleColorChange('cyan')}>Cyan</button>
                    <button onClick={() => handleColorChange('lime')}>Lime</button> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminHeader