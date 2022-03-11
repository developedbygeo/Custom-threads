import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import CartView from '../components/Cart/CartView';
import ActionButtons from '../components/Extra/ActionButtons';
import { StyledCheckout } from '../components/UI/Container.styled';

const steps = ['checkout', 'details', 'success'];
// steps[steps.indexOf(pathname.replace('/', ''))+1]
// TODO to get to the next one dynamically

const layoutSettings = {
  justify: 'center',
  align: 'center',
  dir: 'column',
};

const Checkout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentStep = steps.indexOf(pathname.replace('/', ''));

  const onReturnHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <>
      <StyledCheckout flexSettings={layoutSettings}>
        <p className="step-indicator">
          <span className="step">{currentStep}</span>
          <span className="step-description">{steps[currentStep]}</span>
        </p>
        <CartView />
        <ActionButtons isCheckout onDisable={onReturnHandler} />
      </StyledCheckout>
    </>
  );
};

export default Checkout;
