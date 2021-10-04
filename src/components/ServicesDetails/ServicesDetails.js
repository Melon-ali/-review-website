import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ServicesDetails = (props) => {
    const {name, img, discription, } = props.service
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={{color: 'black'}}>{discription.slice(0, 70)} </Card.Text>
                    <div className="enroll">
                        <Button variant="info">READ MORE</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServicesDetails;