import React from 'react';

import QuoteSign from '../../Image/Quote.png'; 

import './Quote.css'; 
const Quote = () => {
    return (

        <div> 
            <div id="quoteContent" className="responsivePadding responsiveQuotDivWidth mx-auto d-flex justify-content-center align-items-center flex-column"> 
                <img src={QuoteSign} alt="QuoteSign" className="mb-2 "/>
                <p className="text-white fontFamilyWork text-center fs-5 border-bottom"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque placerat scelerisque tortor ornare ornare. Quisque 
                    placerat scelerisque felis vitae tortor augue. Velit nascetur 
                    Consequat faucibus porttitor enim et.
                </p>
                <p className="text-white"> John Doe</p>
            </div>
        </div>
            
            
    );
};

export default Quote;