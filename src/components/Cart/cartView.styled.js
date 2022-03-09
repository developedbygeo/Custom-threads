import { css } from 'styled-components';

import { flexMixin, gridMixin, maxContainer } from '../shared/mixins';

export const cartView = css`
  max-height: 85vh;
  min-height: 35vh;
  height: auto;
  ${flexMixin('space-between', 'flex-start', 'column')};

  & > .cart-header {
    padding-block: 1rem;
    width: 100%;
    h1 {
      font-size: 2.8rem;
    }
    span {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  & > .cart {
    ${gridMixin('1fr', 'auto', '2vh')};
    max-height: 80vh;
    overflow-y: auto;
    & > li {
      max-height: 15rem;
    }
    .description {
      border: none;
      border-left: 1px solid ${({ theme }) => theme.colors.cardBg};
      padding: 1rem 2rem;
    }
    .img-wrapper {
      padding-inline: 1rem;
      img {
        width: 80%;
        max-width: 5rem;
      }
    }
    .info-wrapper {
      h3 {
        text-align: left;
        font-weight: 400;
      }
      .price,
      .quantity {
        font-weight: 500;
      }
    }
  }
  .cart-icon-left,
  .cart-icon-right {
    & > svg {
      transform: translateY(2px) scale(1.15);
    }
  }
  .cart-icon-left {
    margin-right: 2vw;
  }
  .cart-icon-right {
    margin-left: 2vw;
  }
  .cart-actions {
    height: 100%;
    border-left: 1px solid ${({ theme }) => theme.colors.cardBg};
    ${flexMixin('center', 'center', 'column')};
    & > button {
      ${maxContainer}
      padding: 0;
      border-radius: 0.5rem;
    }
    svg {
      transform: scale(1.65);
    }
  }
  .price-wrapper {
    width: 100%;
    padding: 2rem 0.5rem;
    ${flexMixin('space-between', 'center', 'row')};
    & > .price-header {
      font-weight: 300;
    }
    & > .price-text {
      color: ${({ theme }) => theme.colors.accent};
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
  .action-wrapper {
    width: 100%;
    ${flexMixin('space-between', 'center', 'row')};
  }
  .single-btn-layout {
    justify-content: center;
  }
`;
