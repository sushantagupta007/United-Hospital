import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Paper } from '@mui/material';

import './Billing.css'
import BillingService from './../BillingService/BillingService';
const services = [
    {
        name: "Ambulance",
        cost: 1500
    },
    {
        name: "ICU Ambulance",
        cost: 3000
    },
    {
        name: "Blood Test",
        cost: 1500
    },
    {
        name: "ECG",
        cost: 2000
    },
    {
        name: "Bone Marrow Test",
        cost: 1000
    },
    {
        name: "Cancer Treatment",
        cost: 100000
    },
    {
        name: "Heart Diseases",
        cost: 150000
    },
    {
        name: "Surgery",
        cost: 150000
    }
]


const Billing = () => {
    
    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // save to local storage (for now)
        // addToDb(product.key);
    }
    
    return (
        <>
           
            <div className="shop-container">
                <div className="service-container">
                    {
                        services.map(service => <BillingService
                            key={service.name}
                            service={service.name}
                            cost={service.cost}
                            handleAddToCart={handleAddToCart}
                        >
                        </BillingService>)
                    }
                </div>
                {/* <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div> */}
            </div>
        </>
    );
};

export default Billing;