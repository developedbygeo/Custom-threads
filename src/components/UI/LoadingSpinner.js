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
    border: 6px solid ${({ theme }) => theme.colors.activeNav};
    border-color: ${({ theme }) => theme.colors.activeNav} transparent
      ${({ theme }) => theme.colors.activeNav} transparent;
    animation: ${spinning} 2s linear infinite;
  }
`;
const SpinnerMessage = styled.p`
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.11rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.activeNav};
  & > span {
    color: ${({ theme }) => theme.colors.mainText};
  }
`;
Spinner.displayName = 'Spinner';

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <Spinner></Spinner>
      <SpinnerMessage>
        <span>
          Content still loading...
          <br />
        </span>
        Give it a second and try refreshing your browser!
      </SpinnerMessage>
    </div>
  );
};

export default LoadingSpinner;
