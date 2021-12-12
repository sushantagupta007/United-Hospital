import React from 'react';
import './Care.css';
import BlackDoctor from '../../Image/Doctor.png'

const Care = () => {
    return (
        <div> 
            <div className="d-flex align-items-center flex-column  w-50 mx-auto my-4">
                <p className="text-uppercase secondaryTextColor fontWeight700 responsiveFontSize text-center"> Welcome to Medical </p>
                <h3 className="responsiveFont fontWeight400  fontFamilyYesava fw-bolder fs-2 text-center primaryTextColor"> A Great Place to Receive Care </h3>
                <p className="text-center fontFamilyWork responsiveFontSize"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque placerat scelerisque tortor ornare ornare. Convallis 
                    felis vitae tortor augue. Velit nascetur proin massa in. 
                    Consequat faucibus porttitor enim et.
                </p>
            </div>
            <div id="responsiveDivSize"> 
                <img className="w-100" src={BlackDoctor} alt="BlackDoct" />
            </div>
                
        </div>
    );
};

export default Care;