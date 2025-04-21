import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 mr-10 md:hover:bg-amber-400'> 
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;