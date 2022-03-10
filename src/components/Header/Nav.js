import { useState, useEffect } from 'react';
import useViewport from '../../hooks/useViewport';
import { NavLink, useLocation } from 'react-router-dom';

import Dropdown from './Dropdown.js';
import Modal from '../UI/Modal/Modal';
import CartView from '../Cart/CartView.js';
import CartButton from './CartButton';
import { Person } from '@styled-icons/bootstrap/Person';
import { MenuAltRight } from '@styled-icons/boxicons-regular/MenuAltRight';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

const Nav = () => {
  const windowWidth = useViewport();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowDropdown(false);
  }, [pathname]);

  const showDropdownHandler = () => setShowDropdown((prevState) => !prevState);

  const showCartHandler = () => setIsCartVisible((prevState) => !prevState);

  const isMobile = windowWidth <= 768;

  const mobileView = (
    <nav className="mobileNav">
      <button>
        <Person />
      </button>
      <CartButton onClick={showCartHandler} />
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

  return (
    <>
      {isCartVisible && (
        <Modal purpose="cart" onDisable={showCartHandler}>
          <CartView onDisable={showCartHandler} />
        </Modal>
      )}
      {isMobile ? mobileView : desktopView}
    </>
  );
};

export default Nav;
