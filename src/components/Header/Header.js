import { Link } from 'react-router-dom';

import StyledHeader from './Header.styled';
import Nav from './Nav.js';

const Header = () => {
  return (
    <StyledHeader>
      <>
        <Link to="/" className="logo">
          <h1>Custom Threads</h1>
        </Link>
      </>
      <Nav />
    </StyledHeader>
  );
};
export default Header;
