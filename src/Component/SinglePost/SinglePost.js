import React from 'react';

const SinglePost = (props) => {
    const {img,details,title} = props.data
    return (
        <>
        <img className="w-100 rounded" src={img} alt="" />
        <h1 className='fontFamilyYesava primaryTextColor fw-bold'> {title}</h1>
        
        <div>
            <p>
                {details}
            </p>
        </div>   
    </>
    );
};

export default SinglePost;