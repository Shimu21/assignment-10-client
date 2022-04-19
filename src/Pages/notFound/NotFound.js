import React from 'react';
import { EmojiSadIcon } from '@heroicons/react/solid'
import './NotFound.css'



const NotFound = () => {
    return (
        <div className='sleeping'>
            <div className="container">
                <h1 className='text-5xl font-bold mt-8 text-green-700'>Page is sleeping</h1>
            </div>

            <div className="container">
                <EmojiSadIcon className='emo'></EmojiSadIcon>
            </div>


        </div>
    );
};

export default NotFound;