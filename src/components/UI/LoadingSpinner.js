import styled from 'styled-components/macro';
import { spinning } from '../shared/animations';

const Spinner = styled.div`
  display: inline-block;
  width: 55px;
  height: 55px;
  align-self: ${({ alignSelf }) => alignSelf || 'initial'};
  justify-self: ${({ justifySelf }) => justifySelf || 'initial'};
  &:after {
    content: ' ';
    display: block;
    width: 40px;
    height: 40px;
    margin: 0.4rem;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.promoText};
    border-color: ${({ theme }) => theme.colors.promoText} transparent
      ${({ theme }) => theme.colors.promoText} transparent;
    animation: ${spinning} 2s linear infinite;
  }
`;
const SpinnerMessage = styled.p`
  text-align: center;
  letter-spacing: 0.11rem;
`;
Spinner.displayName = 'Spinner';

const LoadingSpinner = () => {
  return (
    <>
      <Spinner></Spinner>
      <SpinnerMessage>Please try refreshing your browser</SpinnerMessage>
    </>
  );
};

export default LoadingSpinner;
