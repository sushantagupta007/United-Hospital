import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <>
        <h1 className="text-center">Contact With Us</h1>
        <div className="container" id="contactContainer">
            
            <div className="row">
                <div className="col-8 p-2 boxSizing" id="contactDetails">
                    <div className="row">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <h3 className="text-primary">Our Address</h3>
                        </div>
                        <div className="col-8">
                            <address>
                                <i className="fas fa-map-marker"></i> <br/>
                                <span className="fw-bold"> Postal Address</span> <br/>
                                Plot 15, Road 71 <br/>
                                Gulshan, Dhaka-1212 <br/>
                                Bangladesh
                            </address>
                            <address>
                                <i className="fas fa-mobile-alt"></i> <br/>
                                <span className="fw-bold"> Mobile</span> <br/>
                                +88 02 8836444 <br/>
                                +88 02 8836000
                            </address>
                            <address>
                                <i className="fas fa-mobile-alt"></i> <br /> 
                                <span className="fw-bold"> Fax</span> <br/>
                                Fax:+88 02 8836446
                            </address>
                            <address>
                                <i className="fas fa-at"></i> <br />
                                <span className="fw-bold">Email</span> <br/>
                                united.hospital@healthcare.com
                            </address>
                        </div>
                    </div>
                       <p className="text-center">Our Customer Service is Open for 24/7. Please Drop Your Query Here!! </p>
                </div>
                <div className="col-4 border-top border-bottom border-end">
                    <h4 className="text-center text-primary">Write Your Query Here</h4>
                    
                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bolder">Your Name</label> 
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Full Name"/> <br/>

                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bolder">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/> <br/>
                        </div>
                        <div>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bolder ">Your Query</label>
                        <textarea className="form-control resize mb-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button type='button' className="btn btn-primary">Submit </button>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;