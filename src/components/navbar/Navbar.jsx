import React,{useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiLogoGmail,BiSolidPhoneCall } from 'react-icons/bi';
// import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Welcome</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#experience">Experience</a></p>
  <p><a href="#certifications">Certifications</a></p>
  <p><a href="#resume">Resume</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div classname="portfolio__navbar-links_logo">
          <p id='sj'>SJ</p>
        </div>
        <div className="portfolio__navbar-links_container">
          <Menu />
        </div>
        <div className='icons'>
          <a href="https://github.com/jainsid499">
            <AiFillGithub size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/siddhantjain02/">
            <AiFillLinkedin size="3rem" />
          </a>
          <a href="https://shorturl.at/acqX4">
            <BiLogoGmail size="3rem"/>
          </a>
          <a href="+91-9636144787">
            <BiSolidPhoneCall size="3rem"/>
          </a>
      </div>
      </div>
      <div className="portfolio__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />          
        }
        {toggleMenu && (
          <div className="portfolio__navbar-menu_container scale-up-center">
            <div className="portfolio__navbar-menu_container-links">
            <Menu />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar