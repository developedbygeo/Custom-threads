import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Dropdown from './Dropdown.js';
import CartButton from './CartButton';
import { Person } from '@styled-icons/bootstrap/Person';
import { MenuAltRight } from '@styled-icons/boxicons-regular/MenuAltRight';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

const Nav = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setShowDropdown(false);
  }, [pathname]);

  const showDropdownHandler = () => setShowDropdown((prevState) => !prevState);

  const isMobile = windowDimension <= 768;

  const mobileView = (
    <nav className="mobileNav">
      <button>
        <Person />
      </button>
      <CartButton />
      <div>
        <button onClick={showDropdownHandler} className="burger" title="Toggle menu">
          {showDropdown ? <MenuAltRight /> : <Menu />}
        </button>
        {showDropdown && <Dropdown onActivate={showDropdownHandler} />}
      </div>
    </nav>
  );

  const desktopView = (
    <nav className="desktopNav">
      <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/jewelry">Jewelry</NavLink>
        <NavLink to="/electronics">Electronics</NavLink>
      </div>
      <div className="desktopNavCtrl">
        <button>
          <Person />
        </button>
        <CartButton />
      </div>
    </nav>
  );

  return <>{isMobile ? mobileView : desktopView}</>;
};

export default Nav;
