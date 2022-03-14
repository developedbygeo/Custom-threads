import useCheckout from '../hooks/useCheckout';
import { Outlet } from 'react-router-dom';

import ActionButtons from '../components/Extra/ActionButtons';
import { StyledCheckout } from '../components/UI/Container.styled';

const Checkout = () => {
  const { onReturn, onProceed, layout, currentStepNum, currentStepText } = useCheckout();

  return (
    <>
      <StyledCheckout flexSettings={layout}>
        <p className="step-indicator">
          <span className="step">{currentStepNum + 1}</span>
          <span className="step-description">{currentStepText}</span>
        </p>
        <Outlet />
        <ActionButtons isCheckout onDisable={onReturn} onAction={onProceed} />
      </StyledCheckout>
    </>
  );
};

export default Checkout;
