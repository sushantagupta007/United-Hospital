import React from 'react';
import './Banner.css'; 


import BlackDoctor from  '../../Image/Doctor.png'


// const h3 ={
//     color: "rgba(31, 43, 108, 1)",
//     fontFamily: "Yeseva One",
//     fontWeight:400
// }

// const bannerContent ={
//     width:"32.5rem",
//     height:'auto'
// }




const Banner = () => {
    return (
        <div id="responsiveDivSize"> 
            <img className="w-100" src={BlackDoctor} alt="BlackDoct" />
        </div>
    )
        
};

export default Banner;