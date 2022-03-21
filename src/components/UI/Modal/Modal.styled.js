import styled, { css } from 'styled-components';

import { devices } from '../../shared/breakpoints';
import { houdini } from '../../shared/animations';
import { maxContainer } from '../../shared/mixins';
import { cartView } from '../../Cart/cartView.styled';
import { loginView } from '../../Profile/loginView.styled';

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
  animation: ${houdini} 150ms ease-in-out;
  @media ${devices.laptop} {
    width: 65vw;
  }
`;

const getDivStyle = (props) => {
  if (props.backdrop) {
    return backdropStyle;
  }
  return modalStyle;
};

const getPurposeStyle = ({ purpose }) => {
  if (purpose === 'cart') return cartView;
  if (purpose === 'login') return loginView;
};

const DynamicDiv = styled.div`
  ${getDivStyle}
  ${getPurposeStyle}
`;

export default DynamicDiv;
