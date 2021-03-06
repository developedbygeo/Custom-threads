import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const steps = ['review', 'details', 'success'];

const layoutSettings = {
  justify: 'center',
  align: 'center',
  dir: 'column',
};

const useCheckout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const currentStepNum = steps.indexOf(pathname.replace('/checkout/', ''));
  const currentStepText = steps[currentStepNum];
  const nextStep = steps[steps.indexOf(pathname.replace('/checkout/', '')) + 1];

  const areDetailsInvalid = !isAuth && pathname.includes('/details');
  const isLastStep = pathname.includes('/success');

  const onReturnHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onProceedHandler = useCallback(() => {
    if (nextStep) {
      navigate(`/checkout/${nextStep}`);
    } else {
      navigate('/');
    }
  }, [navigate, nextStep]);

  return {
    onReturn: onReturnHandler,
    onProceed: onProceedHandler,
    layout: layoutSettings,
    currentStepNum,
    currentStepText,
    areDetailsInvalid,
    isLastStep,
  };
};

export default useCheckout;
