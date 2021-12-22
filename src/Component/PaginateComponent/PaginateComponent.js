import React from 'react';

const PaginateComponent = (props) => {
    const {details,img} = props
    return (    
    <>
        <img className="w-100 rounded" src={img} alt="" />
        <div>
            <p>
                {details}
            </p>
        </div>   
    </>
                            
    );
};

export default PaginateComponent;