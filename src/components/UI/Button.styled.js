import styled, { css } from 'styled-components';

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
  padding: 1.5rem 2.5rem;
  max-width: 30rem;
  min-width: 2rem;
  min-height: 2rem;
  color: ${({ theme }) => theme.colors.mainText};
  align-self: ${({ alignSelf }) => alignSelf || 'inherit'};
  justify-self: ${({ justifySelf }) => justifySelf || 'initial'};
  &:active {
    transform: scale(1.025);
  }
`;

export const CtaButton = styled.button`
  border: 1.5px solid ${({ theme }) => theme.colors.footerBg};
  color: ${({ theme }) => theme.colors.mainText};
  font-weight: 700;
  border-radius: 0.15rem;
  background: transparent;
  transition: all 200ms ease-in-out;
  ${commonBtnStyling};
  &:hover {
    ${getCtaHoverClr};
    color: ${({ theme }) => theme.colors.mainBg};
  }
`;

export const StyledCartButton = styled.button`
  position: relative;

  & > .total {
    position: absolute;
    top: 60%;
    right: -30%;
    font-weight: 700;
  }
`;

export const SecondaryButton = styled.button``;
export const TertiaryButton = styled.button``;
