import React from 'react';
import { faArrowRight, faCalendarAlt, faEye, faHeart, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const SingleNewsItem = (props) => {
    const {img,small,id,history,key,title,details} = props

    console.log(details)

    return (
    <div className='my-3'> 
        <img className="w-100" src={img} alt="Blog Post" />
        <div className='p-2 d-flex justify-content-evenly'>
            <p> <span> <FontAwesomeIcon  className="secondaryTextColor me-1" icon={faCalendarAlt}></FontAwesomeIcon></span> Monday 05, September 2021</p>
            <p> <span> <FontAwesomeIcon className="secondaryTextColor me-1" icon={faUserAlt}></FontAwesomeIcon></span>By Author</p>
            <p> <span> <FontAwesomeIcon className="secondaryTextColor me-1" icon={faEye}></FontAwesomeIcon></span> 68</p>
            <p> <span> <FontAwesomeIcon className="secondaryTextColor me-1" icon={faHeart}></FontAwesomeIcon></span> 86</p>
        </div>
        <h1 className='fontFamilyYesava primaryTextColor fw-bold'> {title}</h1>
        <p className="fontFamilyWork text-secondary"> {small}</p>
       
        <NavLink 
            to={{
                pathname: `/singlenews/${id}`,
                state: { img: img, details:details }
            }}
           
            id={key} 
            style={{backgroundColor:"#BFD2F8"}} 
            className="btn rounded-pill"> <span className="primaryTextColor">Read More </span> <FontAwesomeIcon className="primaryTextColor fs-7" icon={faArrowRight}></FontAwesomeIcon></NavLink>
    </div>
    );
};

export default SingleNewsItem;