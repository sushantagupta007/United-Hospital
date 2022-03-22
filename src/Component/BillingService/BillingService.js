import React from 'react';

import './BillingService.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const BillingService = ({ cost, handleAddToCart,service }) => {
    return (
        <div className="product">
            <h5 className="product-name">{service}</h5>

            <p>Price: {cost}</p>

            <br />
            <button
                onClick={() => handleAddToCart(service)}
                className="btn-regular"
            ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

        </div>
    );

};

export default BillingService;