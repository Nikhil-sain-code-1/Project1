import React, { useEffect, useRef, useState } from 'react'
import Header from '../UserComponent/Hader'
import UpperHeader from '../UserComponent/UpperHeader'
import Slider from '../UserComponent/Slider'
import FireDb from '../Fbconn';

const UserHomePage = () => {
    var [news, setNews] = useState([])
    // const [isPaused, setIsPaused] = useState(false);
    const marqueeRef = useRef(null);
    useEffect(() => {
        FireDb.child('News').on('value', (snapshot) => {
            const snapNews = (snapshot.val());
            setNews(snapNews || {})

        })
    }, [])
    return (
        <div>
            <UpperHeader />
            <Header />
            <div className='Slider-Div' >
                <Slider />
            </div>

            <div style={{ backgroundColor: '#2f4f4f' }} >  <h2 className="news-heading">News for You</h2>
            </div>
            <div className='News-div'>

                {
                    <div className="news-container" >


                        {news && Object.keys(news).map((key, index) => {
                            const item = news[key];
                            return (
                                <div key={index} style={{ marginBottom: '10px', height: '150px', overflow: 'hidden' }}>

                                    <h2 style={{ marginTop: '10px', color: 'red' }}>{item.Heading}</h2>
                                    <p style={{ marginTop: '0px', color: 'blue' }}>{item.Content}</p>

                                </div>
                            );
                        })}


                        {Object.keys(news).map((key) => {
                            const item = news[key];
                            return (
                                <div key={`dup-${key}`} className="news-item">
                                    <h2 style={{ color: 'red', margin: '5px 0' }}>{item.Heading}</h2>
                                    <p style={{ color: 'blue', margin: '5px 0' }}>{item.Content}</p>
                                </div>
                            );
                        })}


                    </div>

                }
            </div>

            <div className=" clearfix " >
                <h1 style={{ textAlign: 'center' }} >Welcome to our Website </h1> <hr />
                <br />
                <p style={{ color: 'blue' }} >Welcome to our management platform—your all-in-one solution for streamlined operations, team collaboration, and strategic growth. In today’s dynamic work environment, businesses need tools that not only organize workflows but also adapt to changing needs. Our platform is designed to help managers and teams stay on top of tasks, deadlines, and goals with clarity and control. With features like task tracking, real-time updates, file sharing, and performance analytics, you can simplify complex operations and make better decisions faster. Whether you're leading a startup, managing a remote team, or overseeing enterprise-level projects, our intuitive dashboard brings everything into one place—accessible anytime, from any device. Collaboration is seamless, communication is efficient, and accountability is built-in. You can customize workflows, set automated reminders, and monitor progress without the need for constant micromanagement. Our platform also ensures your data stays safe with top-tier security protocols and encrypted storage. At its core, we believe that great management begins with visibility, alignment, and trust. That’s why we’ve built a solution that empowers leaders to focus on outcomes, not just tasks.
                </p>
            </div>
    
          <span> <button className='Login-btn'>Login</button> </span>

        </div >
    )
}

export default UserHomePage