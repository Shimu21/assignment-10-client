import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../image/slider1.png';
import slider2 from '../../../image/slider2.png';
import slider3 from '../../../image/slider3.png';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Malai-Pudding</h3>
                        <p>Creamy malai egg puding. The authentic taste you can get here</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Old-Town Famous Teheri</h3>
                        <p>This Beef Teheri is the most popular food item among Bengali's culture</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Beef Nehari</h3>
                        <p>Bengali's most favorite food item</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;