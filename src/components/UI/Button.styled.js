import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { flexMixin, colorInteract, buttonClickEffect } from '../shared/mixins';
import { smallIconStyle } from '../shared/styles/miscStyling';
import { bumpText } from '../shared/animations';
import { buttonElevationLow } from '../shared/shadows';

const standardHover = css`
  @media (hover: hover) {
    &:hover:enabled {
      background: ${({ theme }) => theme.colors.ctaEerieBlack};
    }
  }
`;
const altHover = css`
  @media (hover: hover) {
    &:hover:enabled {
      background: ${({ theme }) => theme.colors.ctaSecondaryBgClr};
      border: 1.5px solid ${({ theme }) => theme.colors.ctaSecondaryBgClr};
      color: ${({ customClr }) => customClr || 'initial'};
    }
  }
`;

const hoverTransformScale = css`
  transform: scale(1.1);
`;

const getCtaHoverClr = ({ ctaAltHover }) => {
  if (ctaAltHover) {
    return altHover;
  }
  return standardHover;
};

const getTransformHover = ({ disableTransform }) => {
  if (disableTransform) return '';
  return hoverTransformScale;
};

const cartButtonInteract = ({ isCartAction }) => {
  if (isCartAction) return altHover;
};

const commonBtnStyling = css`
  letter-spacing: 0.125rem;
  text-align: center;
  max-width: 100%;
  padding: ${({ p }) => p || '2rem 4rem'};
  max-width: 30rem;
  min-width: 2rem;
  min-height: 2rem;
  border: none;
  outline: none;
  background: none;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.mainText};
  align-self: ${({ alignSelf }) => alignSelf || 'inherit'};
  justify-self: ${({ justifySelf }) => justifySelf || 'initial'};
  &:active {
    transform: scale(1.025);
  }
`;

const utilityStyling = css`
  ${commonBtnStyling}
  ${colorInteract}
  ${flexMixin('center', 'center', 'row')};
  gap: 1rem;
  padding: 0.5rem;
  max-width: 20rem;
  min-height: 5rem;
  min-width: 7rem;
  transition: all 100ms ease-in-out;
  ${cartButtonInteract}
  & > span {
    height: 100%;
    font-weight: 500;
    width: auto;
  }
  svg {
    height: 100%;
    width: 100%;
    max-width: ${({ iconMaxWidth }) => iconMaxWidth || '2rem'};
  }
  .text {
    ${flexMixin('center', 'center', 'row')};
  }
  .icon {
    ${flexMixin('center', 'center', 'row')};
  }
`;

export const CtaButton = styled.button`
  ${commonBtnStyling};
  border: 1.5px solid ${({ theme }) => theme.colors.footerBg};
  color: ${({ theme }) => theme.colors.mainText};
  font-weight: 700;
  background: transparent;
  transition: all 200ms ease-in-out;
  ${getCtaHoverClr};
  ${buttonClickEffect}
  ${buttonElevationLow}
  @media (hover: hover) {
    &:hover:enabled {
      color: ${({ theme }) => theme.colors.mainBg};
      ${getTransformHover}
    }
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.heroBg};
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled.button`
  ${commonBtnStyling};
  color: ${({ theme }) => theme.colors.ctaDavysGray};
  ${colorInteract}
`;

export const StyledCartButton = styled.button`
  position: relative;

  & > .total {
    position: absolute;
    top: 60%;
    right: -35%;
    font-weight: 700;
  }
  .total-active {
    color: ${({ theme }) => theme.colors.accent};
  }
  .bump {
    animation: ${bumpText} 250ms ease-in-out;
  }
`;

export const StyledUtilityBtn = styled.button`
  ${utilityStyling}
  ${smallIconStyle}
`;

export const StyledLink = styled(Link)`
  position: relative;
  ${utilityStyling}
  ${flexMixin('center', 'center', 'row')};
  ${smallIconStyle}
  &::before {
    content: '';
    position: absolute;
    bottom: 10%;
    background: ${({ theme }) => theme.colors.lightText};
    height: 0.5px;
    width: 100%;
    margin: auto;
    transition: all 50ms ease-in-out;
  }
  @media (hover: hover) {
    &:hover::before {
      background: ${({ theme }) => theme.colors.activeNav};
    }
  }
  svg {
    margin-top: 1rem;
  }
`;
