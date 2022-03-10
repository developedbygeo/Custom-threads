import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../features/cartSlice';

import CartItem from './CartItem';
import { CtaButton, SecondaryButton } from '../UI/Button.styled';
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from 'react-icons/ai';

export const CartView = ({ onDisable }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalCost.toFixed(2));
  const itemsExist = cartItems.length > 0;

  console.log('cart rendered');

  const addItemHandler = (item) => {
    dispatch(cartActions.addItem(item));
  };

  const removeItemHandler = (item) => {
    dispatch(cartActions.removeItem(item.id));
  };

  const cartView = cartItems.map((item) => (
    <CartItem
      key={item.id}
      product={item}
      onAddItem={addItemHandler.bind(null, item)}
      onRemoveItem={removeItemHandler.bind(null, item)}
    />
  ));

  const emptyView = (
    <>
      <h4>No items were found in your cart.</h4>
      <p>Please feel free to add some and check back again.</p>
    </>
  );

  return (
    <>
      <div className="cart-header">
        <h2>
          My <span>Cart</span>
        </h2>
      </div>
      <div className="cart">{itemsExist ? cartView : emptyView}</div>
      {itemsExist && (
        <div className="price-wrapper">
          <p className="price-header">Price:</p>
          <p className="price-text">${totalPrice}</p>
        </div>
      )}
      <div className={`action-wrapper ${!itemsExist ? 'single-btn-layout' : ''}`}>
        <SecondaryButton onClick={onDisable} className="return-btn">
          <span className="cart-icon-left">
            <AiOutlineArrowLeft />
          </span>
          <span>Return</span>
        </SecondaryButton>
        {itemsExist && (
          <Link to="/checkout" onClick={onDisable}>
            <CtaButton ctaAltHover disableTransform className="checkout-btn">
              <span>Checkout</span>
              <span className="cart-icon-right">
                <AiOutlineShoppingCart />
              </span>
            </CtaButton>
          </Link>
        )}
      </div>
    </>
  );
};
