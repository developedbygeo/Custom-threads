import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CtaButton, SecondaryButton } from '../UI/Button.styled';
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from 'react-icons/ai';

const ActionButtons = ({ isCart, isCheckout, onDisable, onAction, isDisabled }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemsExist = cartItems.length > 0;

  const cartView = (
    <div className={`action-wrapper ${!itemsExist ? 'single-btn-layout' : ''}`}>
      <SecondaryButton onClick={onDisable} className="return-btn">
        <span className="cart-icon-left">
          <AiOutlineArrowLeft />
        </span>
        <span>Return</span>
      </SecondaryButton>
      {itemsExist && (
        <Link to="/checkout/review" onClick={onDisable}>
          <CtaButton ctaAltHover disableTransform className="checkout-btn">
            <span>Checkout</span>
            <span className="cart-icon-right">
              <AiOutlineShoppingCart />
            </span>
          </CtaButton>
        </Link>
      )}
    </div>
  );

  const checkoutView = (
    <div className={`action-wrapper ${!itemsExist ? 'single-btn-layout' : ''}`}>
      <SecondaryButton onClick={onDisable} className="return-btn">
        <span className="cart-icon-left">
          <AiOutlineArrowLeft />
        </span>
        <span>Return</span>
      </SecondaryButton>
      {itemsExist && (
        <CtaButton
          onClick={onAction}
          disabled={isDisabled}
          ctaAltHover
          disableTransform
          className="checkout-btn"
        >
          <span>Continue</span>
          <span className="cart-icon-right">
            <AiOutlineShoppingCart />
          </span>
        </CtaButton>
      )}
    </div>
  );

  const genericView = (
    <div className="action-wrapper">
      <SecondaryButton onClick={onDisable} className="return-btn">
        <span className="cart-icon-left">
          <AiOutlineArrowLeft />
        </span>
        <span>Return</span>
      </SecondaryButton>
      {itemsExist && (
        <CtaButton
          onClick={onAction}
          ctaAltHover
          disableTransform
          className="checkout-btn"
          disabled={isDisabled}
        >
          <span>Continue</span>
          <span className="cart-icon-right">
            <AiOutlineShoppingCart />
          </span>
        </CtaButton>
      )}
    </div>
  );
  return isCart ? cartView : isCheckout ? checkoutView : genericView;
};

export default React.memo(ActionButtons);
