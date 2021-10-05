import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className="text-center text-danger">4O4</h1>
            <div className="text-center">
                <NavLink  to="/home">Go Back</NavLink>
            </div>
            <h2 className="text-center p-5">Page Not Found</h2>
        </div>
    );
};

export default NotFound;