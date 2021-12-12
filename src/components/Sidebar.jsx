import React from 'react';
import useState from "react";

const Sidebar = () => {
    const navLinks = [
        { url: '/about-us', name: 'About Us' },
        { url: '/projects', name: 'Projects' },
        { url: '/services', name: 'Services' },
        { url: '/contact-us', name: 'Contact Us' },
      ];
      

    
     const handleClick = () => {
         
        
      }

    return (
        <div>
            
          <button onClick={handleClick}>menu</button>
          <div className="">               
            <ul>
              {navLinks.map(({ url, name }) => (
                <li>
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
    )
}

export default Sidebar


  
