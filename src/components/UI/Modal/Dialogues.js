import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Product from '../../Products/Product';

import { CtaButton, SecondaryButton } from '../Button.styled';
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from 'react-icons/ai';

export const CartDialogue = ({ onDisable }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const itemsExist = cartItems.length > 0;

  const cartView = cartItems.map((item) => <Product key={item.id} product={item} isCartItem="true" />);

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
