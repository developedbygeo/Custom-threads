import { StyledCartButton } from '../UI/Button.styled';
import { Bag } from '@styled-icons/ionicons-outline/Bag';

const CartButton = ({ onClick }) => {
  return (
    <StyledCartButton onClick={onClick}>
      <span>
        <Bag className="bag" />
      </span>
      <span className="total">0</span>
    </StyledCartButton>
  );
};

export default CartButton;
