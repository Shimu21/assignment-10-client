import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h2 style={{ color: 'green', marginTop: 20, marginBottom: 30 }}>About Me</h2>

            <div>
                <div className="container">
                    <p>This is Shimu Akter Shipa, I am going to be a junior Web Developer soon.
                        I have completed BBA in Finance and Banking and MBA in Marketing from Southeast University.
                        I have worked for 5 years in 4 different multinational companies.
                        Now I am a housewife and a mother also, and can not go out for doing job.
                        But I have a core desire to be a successful working lady and will be a successful Web Developer also.
                    </p>
                </div>
                <div className="container" id='about'>
                    <h4>I am very proud to be a part of Programming Hero Community. I believe in hardworking and can welcome any new
                        things relate to my job.
                    </h4>
                    <div className='thanks'>
                        <h2>Thanks <span style={{ color: 'green' }}>!!!</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 