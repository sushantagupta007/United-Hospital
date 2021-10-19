import React from 'react';
import notfound from '../../Image/404.jpg'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
           <img src={notfound} alt="not found" />
           <button type="button" className="btn btn-link"> <Link to="/Home">Got To Home </Link> </button>
        </div>
    );
};

export default NotFound;