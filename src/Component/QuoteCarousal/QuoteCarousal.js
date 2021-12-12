import React from 'react';
import Quote from '../Quote/Quote';
import { Carousel } from 'react-bootstrap';

const QuoteCarousal = () => {
    return (
        <div id="quoteDiv">
            <Carousel>
                <Carousel.Item>
                    <Quote></Quote>
                </Carousel.Item>
                <Carousel.Item>
                    <Quote></Quote>
                </Carousel.Item>
                <Carousel.Item>
                    <Quote></Quote>
                </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default QuoteCarousal;