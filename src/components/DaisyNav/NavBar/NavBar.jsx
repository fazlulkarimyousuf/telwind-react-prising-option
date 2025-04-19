import React from 'react';
import Link from './Link';

const navigationData = [
    {
      id: "home",
      name: "Home",
      path: "/"
    },
    {
      id: "about",
      name: "About Us",
      path: "/about"
    },
    {
      id: "services",
      name: "Services",
      path: "/services"
    },
    {
      id: "blog",
      name: "Blog",
      path: "/blog"
    },
    {
      id: "contact",
      name: "Contact",
      path: "/contact"
    }
  ];
  

const NavBar = () => {
    return (
         <nav>
            <ul className='flex'>
            {
                navigationData.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
            {/* <ul className='flex space-x-4'>
                {
                    navigationData.map(route =><li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                        </li>)
                }
            </ul> */}


            {/* <ul className='flex space-x-4'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/About">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li> 
            </ul>*/}
        </nav>
    );
};

export default NavBar;