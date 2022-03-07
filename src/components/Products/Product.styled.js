import styled, { css } from 'styled-components';

import { Card } from '../UI/Card.styled';
import { flexMixin } from '../shared/mixins';

const ProductItem = css`
  height: 100%;
  width: 90%;
  margin: auto;
  ${flexMixin('center', 'center', 'column')};
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBg};
  & > .img-wrapper {
    max-height: 30rem;
    width: 25rem;
    padding: 3rem;
  }

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
  h3 {
    text-align: center;
  }
  .price {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.15rem;
  }
`;

const CartItem = css`
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

const getItemStyle = ({ isCartItem }) => {
  if (isCartItem) {
    return CartItem;
  }
  return ProductItem;
};

export const ItemCard = styled(Card)`
  ${getItemStyle}
`;

const ProductItemDescription = css`
  height: 100%;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBg};
  ${flexMixin('space-between', 'flex-start', 'column')};
  gap: 1rem;
  padding: 1rem;
  line-height: 1.75;
  text-align: center;
  p {
    letter-spacing: 0.1015rem;
    font-weight: 500;
  }
  & > .cta-wrapper {
    padding: 2rem;
    button {
      min-height: 2rem;
      max-width: 25rem;
    }
  }
`;

const CartItemDescription = css`
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
const getDescriptionStyle = ({ isCartItem }) => {
  if (isCartItem) {
    return CartItemDescription;
  }
  return ProductItemDescription;
};

export const DescriptionCard = styled(Card)`
  ${getDescriptionStyle}
`;
