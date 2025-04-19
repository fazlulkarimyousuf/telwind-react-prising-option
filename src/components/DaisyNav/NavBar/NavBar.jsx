import React from 'react';

const NavBar = () => {
    return (
         <nav>
            <ul className='flex space-x-4'>
                < li><a href="/">Home</a></ li >
                < li><a href="/About">About</a></li>
                < li><a href="/blog">Blog</a></ li>
            </ul>
        </nav>
    );
};

export default NavBar;