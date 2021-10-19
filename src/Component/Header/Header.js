import React from 'react';
import { Link } from 'react-router-dom';
import Doctor from '../../Image/doctor.png'
import useAuth from '../Hooks/useAuth'

const Header = () => {
    const {user,logOut } = useAuth(); 
    const name = user.displayName
    const email = user.email

    const userNameShow = () =>{
        if(user.displayName){
            return name
        }
    }

    const emailShow = () =>{

        if(!user.displayName){
            return email
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
            <Link className="navbar-brand" to="/Home">
                <img src={Doctor} alt="" width="60" height="60"/>
            </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item"> 
                    <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/OurTeam">Our Team</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Services">Services</Link>
                </li>
                <li> 
                    <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/Registraion">Registrtaion</Link>
                </li>
                <li className="nav-link fw-bold"> Welcome Mr.{user.displayName ? userNameShow():emailShow()} 

                </li>
                
                   
                <li>  
                    {
                    user.displayName||user.email? <button type="button" onClick={logOut} className="btn btn-link">Logout </button>: ''}
                </li>

            </ul>
        </div>
        </div>
        </nav>
</div>
    );
};

export default Header;