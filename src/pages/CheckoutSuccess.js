import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { cartActions } from '../features/cartSlice';
import { authActions } from '../features/authSlice';
import { CtaButton } from '../components/UI/Button.styled';
import { ReactComponent as SuccessSVG } from '../assets/success.svg';
import { Home } from '@styled-icons/boxicons-regular/Home';

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(cartActions.resetCart());
    dispatch(cartActions.setCheckout(true));
    dispatch(authActions.resetAuth());
  }, [dispatch]);

  const successHandler = () => {
    navigate('/home');
    dispatch(cartActions.setCheckout(false));
  };

  return (
    <article className="success-header">
      <div className="success-text">
        <h2>We have received your order!</h2>
        <p>and it will be dispatched as soon as possible.</p>
      </div>
      <div className="svg-cont">
        <SuccessSVG />
      </div>
      <div className="action-wrapper">
        <CtaButton onClick={successHandler} ctaAltHover>
          <span className="svg-wrap">
            <Home />
          </span>
          <span>Return to Home</span>
        </CtaButton>
      </div>
    </article>
  );
};

export default CheckoutSuccess;
