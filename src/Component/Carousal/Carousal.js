import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Image/Banner/1.jpg'; 
import banner2 from '../../Image/Banner/2.jpg'; 
import banner3 from '../../Image/Banner/3.jpg'; 

const Carousal = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="text-black">Diagnosis</h3>
                <p className="text-black">Our Expert Lab Microbiologist</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="text-black">Careful Team</h3>
                <p className="text-black">We have expert Doctors</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Careful Team</h3>
                <p>We have expert Doctors</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousal;