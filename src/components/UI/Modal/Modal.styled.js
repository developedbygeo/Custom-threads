import styled, { css } from 'styled-components';
import { houdini } from '../../shared/animations';
import { flexMixin, maxContainer } from '../../shared/mixins';

const backdropStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  ${maxContainer};
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.65);
`;

const modalStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 85%;
  z-index: 30;
  background-color: white;
  transform: translate(-50%, -50%);
  padding: ${({ modPadding }) => modPadding || '2rem'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  min-height: 25vh;
  animation: ${houdini} 400ms ease-in-out;
`;

const getDivStyle = (props) => {
  if (props.backdrop) {
    return backdropStyle;
  }
  return modalStyle;
};

const DynamicDiv = styled.div`
  ${getDivStyle}

  &>.cart {
    ${flexMixin('center', 'space-between', 'column')};
    gap: 1rem;
  }
`;

export default DynamicDiv;
