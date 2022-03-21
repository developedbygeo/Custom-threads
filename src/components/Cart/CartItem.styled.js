import { css } from 'styled-components';

import { flexMixin } from '../shared/mixins';

export const cartItem = css`
  height: 100%;
  width: 100%;
  margin: auto;
  ${flexMixin('center', 'center', 'row')};
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBg};
  & > .img-wrapper {
    max-height: 15rem;
    width: 100%;
    padding: 0.5rem;
  }

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
  h3 {
    text-align: center;
    width: 41vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.15rem;
  }
  .cart-actions {
    padding: 0;
  }
  .cart-desc {
    ${flexMixin('space-between', 'center', 'row')};
  }
`;

export const cartItemDescription = css`
  height: 100%;
  width: 100%;
  border-top: none;
  ${flexMixin('space-between', 'flex-start', 'column')};
  gap: 0.5rem;
  padding: 0;
  line-height: 1.75;
  text-align: center;
  p {
    letter-spacing: 0.1015rem;
    font-weight: 500;
  }
`;
