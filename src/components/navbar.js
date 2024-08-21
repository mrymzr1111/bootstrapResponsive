import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import { ThemeContext } from '../App'; // Adjust path as necessary
import ReactSwitch from 'react-switch'; // Import ReactSwitch


const Navbar = () => {
  const [isLinksVisible, setIsLinksVisible] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}> {/* Apply theme if context is used */}
      <div className="container">
        <div className="nav-logo">

        <ReactSwitch
    onChange={toggleTheme}
   
   
  />
  
          <button
            className="nav-toggle"
            onClick={() => setIsLinksVisible(!isLinksVisible)}
            aria-expanded={isLinksVisible}
          >
            {isLinksVisible ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`nav-links ${isLinksVisible ? 'show-links' : ''}`}>
          <ul className="list">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="nav-social">
          {social.map((socialLink) => (
            <li key={socialLink.id}>
              <a href={socialLink.url}>{socialLink.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
