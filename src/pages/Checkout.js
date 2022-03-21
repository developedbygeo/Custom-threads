import { Outlet } from 'react-router-dom';
import useCheckout from '../hooks/useCheckout';

import ActionButtons from '../components/Extra/ActionButtons';
import { StyledCheckout } from '../components/UI/Checkout.styled';

const Checkout = () => {
  const { onReturn, onProceed, layout, currentStepNum, currentStepText, areDetailsInvalid, isLastStep } =
    useCheckout();

  return (
    <>
      <StyledCheckout flexSettings={layout} className={currentStepText}>
        <p className="step-indicator">
          <span className="step">{currentStepNum + 1}</span>
          <span className="step-description">{currentStepText}</span>
        </p>
        <Outlet />
        {!isLastStep && (
          <ActionButtons
            isCheckout
            onDisable={onReturn}
            onAction={onProceed}
            isDisabled={areDetailsInvalid}
          />
        )}
      </StyledCheckout>
    </>
  );
};

export default Checkout;
