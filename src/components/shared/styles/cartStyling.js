import { css } from 'styled-components';
import { gridMixin, flexMixin, maxContainer } from '../mixins';

export const svgAdjustments = css`
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
`;

export const cartStyling = css`
  & > .cart {
    ${gridMixin('1fr', 'repeat(auto-fill, minmax(min-content, 40px))', '2vh')};
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
      padding: 0;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        max-width: 10rem;
        max-height: 10rem;
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
`;
export const cartActions = css`
  .cart-actions {
    height: 100%;
    border-left: 1px solid ${({ theme }) => theme.colors.cardBg};
    ${flexMixin('center', 'center', 'column')};
    & > button {
      ${maxContainer}
      transition: all 50ms ease;
      padding: 0;
      border-radius: 0.5rem;
    }
    svg {
      transform: scale(1.65);
    }
  }
`;

export const priceStyling = css`
  .price-wrapper {
    width: 100%;
    padding: 2rem 0.5rem;
    ${flexMixin('space-between', 'center', 'row')};
    & > .price-header {
      font-weight: 300;
      font-size: 2rem;
    }
    & > .price-text {
      color: ${({ theme }) => theme.colors.accent};
      font-weight: 500;
      letter-spacing: 1px;
      font-size: 2rem;
    }
  }
`;
