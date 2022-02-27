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

export const maxContainer = () => css`
  height: 100%;
  width: 100%;
`;

export const colorInteract = () => css`
  transition: color 200ms ease-in-out;
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.activeNav};
    }
  }
`;

export const showActive = () => css`
  color: ${({ theme }) => theme.colors.activeNav};
  font-weight: 600;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    bottom: -0.5rem;
    width: 100%;
    height: 0.15rem;
    background: ${({ theme }) => theme.colors.activeNav};
  }
`;
