import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import StyledDropdown from './Dropdown.styled';

const Dropdown = ({ onActivate }) => {
  useEffect(() => {
    console.log('fn recreated');
  }, [onActivate]);

  return (
    <StyledDropdown>
      <NavLink
        onClick={onActivate}
        title="Men"
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={onActivate}
        title="Men"
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/men"
      >
        Men
      </NavLink>
      <NavLink
        onClick={onActivate}
        title="Women"
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/women"
      >
        Women
      </NavLink>
      <NavLink
        onClick={onActivate}
        title="Jewelry"
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/jewelry"
      >
        Jewelry
      </NavLink>
      <NavLink
        onClick={onActivate}
        title="Electronics"
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/electronics"
      >
        Electronics
      </NavLink>
    </StyledDropdown>
  );
};

export default Dropdown;
