import styled, { css } from 'styled-components';

import { flexMixin, colorInteract } from '../shared/mixins';
import { bumpText } from '../shared/animations';

const standardHover = css`
  background: ${({ theme }) => theme.colors.ctaEerieBlack};
`;
const altHover = css`
  background: ${({ theme }) => theme.colors.ctaSecondaryBgClr};
  border: 1.5px solid ${({ theme }) => theme.colors.ctaSecondaryBgClr};
`;

const getCtaHoverClr = ({ ctaAltHover }) => {
  if (ctaAltHover) {
    return altHover;
  }
  return standardHover;
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
  color: ${({ theme }) => theme.colors.mainText};
  align-self: ${({ alignSelf }) => alignSelf || 'inherit'};
  justify-self: ${({ justifySelf }) => justifySelf || 'initial'};
  &:active {
    transform: scale(1.025);
  }
`;

export const CtaButton = styled.button`
  ${commonBtnStyling};
  border: 1.5px solid ${({ theme }) => theme.colors.footerBg};
  color: ${({ theme }) => theme.colors.mainText};
  font-weight: 700;
  border-radius: 0.15rem;
  background: transparent;
  transition: all 200ms ease-in-out;
  &:hover {
    ${getCtaHoverClr};
    color: ${({ theme }) => theme.colors.mainBg};
    transform: scale(1.1);
  }
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
  ${commonBtnStyling}
  ${colorInteract}
  ${flexMixin('center', 'center', 'row')};
  gap: 1rem;
  padding: 0.5rem;
  max-width: 20rem;
  min-height: 5rem;
  min-width: 7rem;
  & > span {
    height: 100%;
    font-weight: 500;
    width: auto;
  }
  svg {
    height: 100%;
    width: auto;
    max-width: 2rem;
  }
  .text {
    ${flexMixin('center', 'center', 'row')};
  }
  .icon {
    ${flexMixin('center', 'center', 'row')};
  }
`;
