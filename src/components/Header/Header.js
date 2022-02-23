import { useState } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown.js';
import StyledHeader from './Header.styled';
import CartButton from './CartButton';
import { Person } from '@styled-icons/bootstrap/Person';
import { MenuAltRight } from '@styled-icons/boxicons-regular/MenuAltRight';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const showDropdownHandler = () => setShowDropdown((prevState) => !prevState);

  console.log('header rendered');

  return (
    <StyledHeader>
      <>
        <Link title="Home" to="/">
          <h1>Custom Threads</h1>
        </Link>
      </>
      <nav>
        <button>
          <Person />
        </button>
        <CartButton />
        <div>
          <button onClick={showDropdownHandler} title="Toggle menu">
            <MenuAltRight />
          </button>
          {showDropdown && <Dropdown onActivate={showDropdownHandler} />}
        </div>
      </nav>
    </StyledHeader>
  );
};
export default Header;
