import { NavLink } from 'react-router-dom';

import StyledDropdown from './Dropdown.styled';

const Dropdown = ({ onActivate }) => {
  return (
    <StyledDropdown>
      <NavLink
        onClick={onActivate}
        title="Men"
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/home"
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
