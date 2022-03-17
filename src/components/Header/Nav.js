import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import useViewport from '../../hooks/useViewport';
import { NavLink, useLocation } from 'react-router-dom';

import Dropdown from './Dropdown.js';
import Modal from '../UI/Modal/Modal';
import CartView from '../Cart/CartView.js';
import ProfileView from '../Profile/ProfileView';
import ActionButtons from '../Extra/ActionButtons';

import CartButton from './CartButton';
import { Person } from '@styled-icons/bootstrap/Person';
import { PersonCheck } from '@styled-icons/bootstrap/PersonCheck';
import { MenuAltRight } from '@styled-icons/boxicons-regular/MenuAltRight';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

const Nav = () => {
  const windowWidth = useViewport();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { pathname } = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isMobile = windowWidth <= 768;

  useEffect(() => {
    setShowDropdown(false);
  }, [pathname]);

  const showDropdownHandler = useCallback(() => setShowDropdown((prevState) => !prevState), []);

  const showCartHandler = useCallback(() => setIsCartVisible((prevState) => !prevState), []);

  const showProfileHandler = useCallback(() => setIsProfileVisible((prevState) => !prevState), []);

  const cart = <CartButton onClick={showCartHandler} />;

  const profile = (
    <button onClick={showProfileHandler} title="My Profile">
      {isLoggedIn ? <PersonCheck /> : <Person />}
    </button>
  );

  const modalCart = (
    <Modal purpose="cart" onDisable={showCartHandler}>
      <CartView onDisable={showCartHandler} isCart />
      <ActionButtons onDisable={showCartHandler} isCart />
    </Modal>
  );

  const modalProfile = (
    <Modal onDisable={showProfileHandler}>
      <ProfileView onDisable={showProfileHandler} />
    </Modal>
  );

  const mobileView = (
    <nav className="mobileNav">
      {profile}
      {cart}
      <div>
        <button onClick={showDropdownHandler} className="burger" title="Toggle Menu">
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
        {profile}
        {cart}
      </div>
    </nav>
  );

  return (
    <>
      {isCartVisible && modalCart}
      {isProfileVisible && modalProfile}
      {isMobile ? mobileView : desktopView}
    </>
  );
};

export default Nav;
