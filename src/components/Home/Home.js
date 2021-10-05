import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [servicesItem, setServicesItem] = useState([])
    useEffect(()=> {
        fetch('./fack.JSON')
        .then(res => res.json())
        .then(data => setServicesItem(data.slice(0, 4)))
    }, [])
    return (
        <div>
            <div className="home-container home">
                <div className="general">
                    <h1 className="title">UPDATE GENERAL EDUCATION</h1>
                    <h4 className="mt-3 title2">Stay in the loop. See what we're up to this year.</h4>
                
                    <p>By educators, for educators. We are the oldest and most trusted web publishing platform for teachers and students.Use our easy invite codes and class management tools to get started. And most importantly, it’s free! Our content filters, moderation options, and multiple privacy tools keep everyone safe.</p>
                </div>
                
            </div>
            <div className="coures">
                <h1>Our Courses</h1>
            </div>
            <div classNam="cart-container">
                {
                    servicesItem.map(service => <Service
                        key={service.id}
                            service={service}>
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Home;