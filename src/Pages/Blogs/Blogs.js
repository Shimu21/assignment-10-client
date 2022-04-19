import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='theory'>
            <div>
                <h2 style={{ color: 'green', marginTop: 10 }}>Theoritical Part</h2>
            </div>
            <div>
                <div className='blog-qa'>
                    <h6>Question no.1: What are the differences between authorization and authentication?</h6>
                    <h6>Answer: Differences between authorization and authentication shown below:</h6>
                    <div className="container d-flex mt-10">
                        <div className="authorization">
                            Authorization
                            <ul>
                                <li>1. Authorization is process of verifying what specific applications, files and data a user has access to. </li>
                                <li>2. Authorization is the process of giving the user permission to access a specific resource or function.
                                </li>
                                <li>3. Authorization must follow authentication.</li>
                            </ul>
                        </div>
                        <div className="authentication">
                            Authentication
                            <ul>
                                <li>1. This is the first step of any security process</li>
                                <li>2. This is the process of verifying who someone is. </li>
                                <li>3. User name and password are the most common authentication factors of it.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='blog-qa2'>
                    <h6>Question no.2: Why are you using firebase? What other options do you have to implement authentication? </h6>
                    <h6>Answer: Firebase authentication provides backend services, easy to use SDKs and ready made UI libraries to authenticate user to
                        to your app.
                        Other ways to authentication can be through cards, retina scans, voice recognition and fingerprints.
                    </h6>
                </div>
                <div className='blog-qa3'>
                    <h6>Question no.2: What other services does firebase provides other than authentication? </h6>
                    <h6>Answer: Firebase Auth Alternatives:
                        * Parse - open Source Backend Platform.
                        * Back4app - Parse Hosting Platform.
                        * Kinvey - Mobile Backend as a Service for the enterprise.
                        * Backendless - Mobile Backend and API Services Platform.

                    </h6>
                </div>
            </div>
        </div>

    );
};

export default Blogs;