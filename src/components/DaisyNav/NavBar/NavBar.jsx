import React, {useState} from 'react';
import Link from './Link';
import {Menu, X} from 'lucide-react';

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
  const [open, setOpen] = useState(false);

  const links =  navigationData.map(route => <Link key={route.id} route={route}></Link>)




    return (
         <nav className='flex justify-between mx-6 '>
          <span className='flex text-black'onClick={() => setOpen(!open)}>
            { 
            open ? 
            <X className='lg:hidden'></X> : 
            <Menu className='lg:hidden'></Menu>
            }

            <ul  className={`lg:hidden absolute duration-1000
               ${open ? 'top-8' : '-top-40'}
                bg-amber-200`}>
              {links}
            </ul>
          
          <h3 className='ml-4'>My Navbar</h3>
          </span>
            <ul className='lg:flex hidden'>
            {
               links
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

            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;