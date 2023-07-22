import React from 'react';
import './Navbar.css';
// import Logo from '../../images/Logo.png';

function Navbar() {
  return (
    <nav className="nav_section">
      <div className='left_container'>
        <div className="logo">
          {/* <img src={Logo} alt="logo" /> */}
        </div>
        <div className="nav-items">
          <li><a href="/">Courses</a></li><i className="fa-solid fa-angle-down"></i>
          <li><a href="/">Programs</a></li><i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className='right_container'>
        <ul className="nav__list" style={{ gap: '32px' }} >
          <li className="fa-solid fa-magnifying-glass"></li>
          <li className="nav__item"><a href="/" className="nav__link">Log in</a></li>
          <li className="nav__item">
            <a href="/" className="nav__link2 nav__link--button" style={{ fontWeight: '700', fontSize: '16px', padding: '10px 42px', height: '40px' }} >JOIN NOW</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;