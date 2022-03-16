import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StyledCartButton } from '../UI/Button.styled';
import { Bag } from '@styled-icons/ionicons-outline/Bag';

const CartButton = ({ onClick }) => {
  const [isCartAnimated, setIsCartAnimated] = useState(false);
  const itemsInCart = useSelector((state) => state.cart.totalQuantity);
  const itemsExist = itemsInCart > 0;

  useEffect(() => {
    if (itemsInCart.length === 0) return;
    setIsCartAnimated(true);
    const animationTimer = setTimeout(() => {
      setIsCartAnimated(false);
    }, 400);
    return () => clearTimeout(animationTimer);
  }, [itemsInCart]);

  const spanStyles = `total ${itemsExist ? 'total-active' : ''} ${isCartAnimated ? 'bump' : ''}`;

  return (
    <StyledCartButton title="Toggle cart" onClick={onClick}>
      <span>
        <Bag className="bag" />
      </span>
      <span className={spanStyles}>{itemsInCart}</span>
    </StyledCartButton>
  );
};

export default CartButton;
