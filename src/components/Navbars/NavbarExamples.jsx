import "./NavbarExamples.css";
import logo from "../../edusity_assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menu_icon from '../../edusity_assets/menu-icon.png'
function NavbarExample() {

  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu =()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
      <nav className={`navlinks ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} className="logo"/>
        <ul className={mobileMenu?'' :'hide_mobile_menu '}>
          <li><Link to='hero' smooth={true} offset={0} duration={100}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-250} duration={100}>Program</Link></li>
          <li><Link to='About-us' smooth={true} offset={-150} duration={100}>About Us</Link></li>
          <li><Link to='campus' smooth={true} offset={-250} duration={100}>Campus</Link></li>
          <li><Link to='testimonails' smooth={true} offset={-250} duration={100}>Testimonial</Link></li>
          <li><Link to='contacts' smooth={true} offset={-260} duration={100} className="cta-nav">Contact us</Link></li>
        </ul>
        <img src={menu_icon} className="menu_icon" onClick={toggleMenu}/>
      </nav>
  );
}

export default NavbarExample;
