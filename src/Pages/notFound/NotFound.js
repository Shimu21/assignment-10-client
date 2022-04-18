import React from 'react';
import { EmojiSadIcon } from '@heroicons/react/solid'



const NotFound = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold mt-8'>Page is sleeping</h1>
            <EmojiSadIcon className='h-50 w-50 align-middle text-red-700'></EmojiSadIcon>


        </div>
    );
};

export default NotFound;