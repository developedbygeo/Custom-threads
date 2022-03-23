import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { cartActions } from '../features/cartSlice';
import { authActions } from '../features/authSlice';
import { CtaButton } from '../components/UI/Button.styled';
import { ReactComponent as SuccessSVG } from '../assets/svg/success.svg';
import { BiHome } from 'react-icons/bi';

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
    <>
      <div className="success-blob" role="img" alt="success blob" />
      <article className="success-header">
        <div className="success-text">
          <h2>We have received your order!</h2>
          <p>and it will be dispatched as soon as possible.</p>
        </div>
        <div className="svg-cont">
          <SuccessSVG />
        </div>
        <div className="action-wrapper">
          <CtaButton className="return-success-btn" onClick={successHandler} ctaAltHover>
            <span>Return to Home</span>
            <span className="svg-wrap">
              <BiHome />
            </span>
          </CtaButton>
        </div>
      </article>
    </>
  );
};

export default CheckoutSuccess;
