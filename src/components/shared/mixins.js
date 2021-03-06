import { css } from 'styled-components';

export const gridMixin = (columns, rows, gap) => css`
  display: grid;
  grid-template-columns: ${columns};
  grid-template-rows: ${rows};
  gap: ${gap};
`;

export const flexMixin = (justify, align, direction) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const customScrollbar = css`
  scrollbar-width: thin;
  scrollbar-color: rgba(${({ theme }) => theme.colors.ctaSecondaryRGB}, 1) transparent;
`;

export const buttonClickEffect = css`
  position: relative;
  &:active {
    top: 2px;
  }
`;

export const transparentBlur = css`
  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {
    background: rgba(${({ theme }) => theme.colors.cardBgRGB}, 0.75);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }
`;

export const maxContainer = css`
  height: 100%;
  width: 100%;
`;

export const underlineEffect = css`
  @media (hover: hover) {
    &::after {
      position: absolute;
      content: '';
      left: 5%;
      right: 5%;
      bottom: 1px;
      width: 90%;
      height: 0.75px;
      transform-origin: right;
      transform: scaleX(0);
      background: ${({ theme }) => theme.colors.activeNav};
      transition: transform 350ms ease;
    }
    @media (hover: hover) {
      &:hover {
        &::after {
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }
  }
`;

export const colorInteract = css`
  position: relative;
  transition: color 200ms ease-in-out;
  @media (hover: hover) {
    &:hover {
      color: ${({ theme, customClr }) => customClr || theme.colors.activeNav};
    }
  }
`;

export const showActive = css`
  color: ${({ theme }) => theme.colors.activeNav};
  font-weight: 600;
  position: relative;
  &::before {
    position: absolute;
    bottom: 1px;
    left: 5%;
    right: 5%;
    transform: translate(-50%, -50%);
    content: '';
    width: 90%;
    transform: scaleX(1) !important;
    height: 2px;
    background: ${({ theme }) => theme.colors.activeNav};
  }
`;
