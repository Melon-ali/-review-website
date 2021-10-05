import React from 'react';
import { Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about-contianer about">
            <Row className="align-items-center justify-content-center about-area">
                <div className="event">
                    <h1>EVENT HEADING YOUR WAY</h1>
                    <h4>We want to keep you updated on announcements <br /> and events happening soon!</h4>
                </div>
            </Row>
            </div>
            
        </div>
    );
};

export default About;