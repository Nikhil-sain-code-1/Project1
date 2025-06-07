import React, { useState, useEffect } from 'react';
import img1 from '../Images/ManagmentBgPic.jpg';
import img2 from '../Images/ManagmentBgPic2.png';
import img3 from '../Images/ManagmentBgPic3.webp';
import img4 from '../Images/ManagmentBgPic4.jpg';

const images = [img1, img2, img3, img4];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            <div
                className="slider-track"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Slide ${index}`} className="slide-img" />
                ))}
            </div>
        </div>
    );
};

export default Slider;
