import styled, { css } from 'styled-components';

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
`;

export const CtaButton = styled.button`
  border: 1.5px solid ${({ theme }) => theme.colors.footerBg};
  color: ${({ theme }) => theme.colors.mainText};
  font-weight: 700;
  border-radius: 0.15rem;
  background: transparent;
  transition: all 400ms ease-in-out;
  ${commonBtnStyling};
  &:hover {
    background: ${({ theme }) => theme.colors.ctaEerieBlack};
    color: ${({ theme }) => theme.colors.mainBg};
  }
`;

export const StyledCartButton = styled.button`
  position: relative;

  & > .total {
    position: absolute;
    bottom: -1%;
    right: -1%;
    font-weight: 700;
  }
`;

export const SecondaryButton = styled.button``;
export const TertiaryButton = styled.button``;
