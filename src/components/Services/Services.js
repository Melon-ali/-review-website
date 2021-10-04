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