import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams();
    return (
        <div style={{ height: "80vh" }}>
            <h2>This is service id: {serviceId}</h2>
        </div>
    );
};

export default Checkout;