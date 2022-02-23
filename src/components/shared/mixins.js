import { css } from 'styled-components';

export const gridMixin = (columns, rows) => css`
  display: grid;
  grid-template-columns: ${columns};
  grid-template-rows: ${rows};
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
