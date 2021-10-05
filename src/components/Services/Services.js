import React, { useEffect, useState } from 'react';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import './Services.css'

const Services = () => {
    const [servicesItem, setServicesItem] = useState([])
    useEffect(()=> {
        fetch('./fack.JSON')
        .then(res => res.json())
        .then(data => setServicesItem(data))
    },[])
    return (
        <div>
            <h1 className="text-center p-3">LETAST UPDATES</h1>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://www.educationworld.in/wp-content/uploads/2016/12/thoughtful-little-girl-with-book-near-a-school-board_1150-3853-500x333.jpg" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 className="card-title">Mental Aspect</h3>
                            <p class="card-text">School is the foremost fountain of knowledge children are exposed to. It gives a chance for them to acquire knowledge on various fields of education such as people, literature, history, mathematics, politics, and other numerous subjects. This contributes to cultivation in the thought process. When one is exposed to the influences coming from various cultural sources, his/her on world and It is widely accepted that the learning process is instrumental in shaping one’s personality and the way he/she deals with situations of life. The shift of thoughts from bookish knowledge to knowledge of life, in schools, has brought forth a sea of change. People have warmed up to the idea of education being the key to a well-rounded development instead of just a mean to acquire degrees and monetary success in life. Education must facilitate the cultivation of a healthy thought process and groom our cognitive abilities. In the present competitive world, education is a basic necessity for human beings after food, clothes and shelter.</p>
                            <button style={{backgroundColor: 'aqua', padding: '8px 15px 8px 15px', border: '0px', borderRadius: '5px'}}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="services-container">
                {
                    servicesItem.map(service => <ServicesDetails
                        key={service.id}
                        service={service}
                    >

                    </ServicesDetails>)
                }
            </div>
        </div>
    );
};

export default Services;