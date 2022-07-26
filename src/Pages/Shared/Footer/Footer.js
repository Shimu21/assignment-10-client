import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='bg-success pt-5 py-5 text-center mt-5'>
            <p><small>copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;