import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import Dropdown from './Dropdown.js';
import StyledHeader from './Header.styled';
import CartButton from './CartButton';
import { Person } from '@styled-icons/bootstrap/Person';
import { MenuAltRight } from '@styled-icons/boxicons-regular/MenuAltRight';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowDropdown(false);
  }, [pathname]);

  const showDropdownHandler = () => setShowDropdown((prevState) => !prevState);

  return (
    <StyledHeader>
      <>
        <Link to="/" className="logo">
          <h1>Custom Threads</h1>
        </Link>
      </>
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
    </StyledHeader>
  );
};
export default Header;
