import { NavLink } from 'react-router-dom';

import StyledDropdown from './Dropdown.styled';

const Dropdown = () => {
  return (
    <StyledDropdown>
      <NavLink title="Men" className={({ isActive }) => (isActive ? 'active' : '')} to="/home">
        Home
      </NavLink>
      <NavLink title="Men" className={({ isActive }) => (isActive ? 'active' : '')} to="/men">
        Men
      </NavLink>
      <NavLink title="Women" className={({ isActive }) => (isActive ? 'active' : '')} to="/women">
        Women
      </NavLink>
      <NavLink title="Jewelry" className={({ isActive }) => (isActive ? 'active' : '')} to="/jewelry">
        Jewelry
      </NavLink>
      <NavLink title="Electronics" className={({ isActive }) => (isActive ? 'active' : '')} to="/electronics">
        Electronics
      </NavLink>
    </StyledDropdown>
  );
};

export default Dropdown;
