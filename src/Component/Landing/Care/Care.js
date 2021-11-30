import React from 'react';
import './Care.css';
import BlackDoctor from '../../../Image/Doctor.png'

const para1 = {
    color:'#159EEC',
    fontWeight:700,
    textTransform: "uppercase",
    fontFamily:'Work Sans',
    fontSize:'18px'
}

const h3 ={
    color:"#1F2B6C",
    fontFamily:'Yeseva One',
    fontWeight:400,
    fontSize:"32px"
}

const para2 ={
    fontFamily:'Work Sans'
}

const Care = () => {
    return (
        <div className="d-flex align-items-center flex-column customPadding w-50 mx-auto my-4">
            <p style={para1}> Welcome to Medical </p>
            <h3 style={h3}> A Great Place to Receive Care </h3>
            <p style={para2}className="text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque placerat scelerisque tortor ornare ornare. Convallis 
                felis vitae tortor augue. Velit nascetur proin massa in. 
                Consequat faucibus porttitor enim et.
            </p>
            <img src={BlackDoctor} alt="BlackDoct" />
        </div>
    );
};

export default Care;