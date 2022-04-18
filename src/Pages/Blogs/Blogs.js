import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='blogs'>
                <h2>Theoritical Parts</h2>
            </div>
            <div className='blog'>
                <div>
                    <h6>Question no.1: What are the differences between authorization and authentication?</h6>
                    <h6>Answer: Differences between authorization and authentication shown below:</h6>
                    <div class="container d-flex mt-3">
                        <div class="mx-auto">
                            authorization
                            <ul>
                                <li>Property is called props.</li>
                                <li>Props are used to pass data from
                                    one component to another.
                                </li>
                                <li>Props are external.</li>
                            </ul>
                        </div>
                        <div class="mx-auto">
                            authentication
                            <ul>
                                <li>State is somethhing that could change.</li>
                                <li>State is a local data storage that can not be passed to other components.</li>
                                <li>State is internal.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bonus1'>
                    <h6>Question no.1: Why are you using firebase? What other options do you have to implement authentication? </h6>
                    <h6>Answer: React is a declarative, efficient, flexible javascripts library. It helps for building
                        user interfaces.  It has four ways to identify the types of Components.
                        Components are used to display data in the UI which we want to see. When our data changes,
                        react will re-render and update our compopnents. In summary, we can say react is a very
                        needful javascript library to build interactive website.
                    </h6>
                </div>
            </div>
        </div>

    );
};

export default Blogs;