import StyledHeader from './Header.styled';
import CartButton from './CartButton';
import { Person } from '@styled-icons/bootstrap/Person';
import { MenuAltRight } from '@styled-icons/boxicons-regular/MenuAltRight';

const Header = () => {
  return (
    <StyledHeader>
      <>
        <h1>Custom Threads</h1>
      </>
      <nav>
        <button>
          <Person />
        </button>
        <CartButton />
        <button>
          <MenuAltRight />
        </button>
      </nav>
    </StyledHeader>
  );
};
export default Header;
