import styled, { css } from 'styled-components';

import { Card } from '../UI/Card.styled';
import { flexMixin, maxContainer } from '../shared/mixins';
import { cartItem, cartItemDescription } from '../Cart/CartItem.styled';
import { detailsStyles, detailsDescription } from './ProductDetails.styled';

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
  .details {
    ${flexMixin('space-between', 'center', 'row')};
    ${maxContainer};

    /* rating's main span */
    & > :nth-child(1) {
      margin-top: 0.4rem;
    }

    .price {
      color: ${({ theme }) => theme.colors.accent};
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0.15rem;
    }
    /* TODO Rating svg size can be set as width=Xpx */
  }
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
    ${flexMixin('space-between', 'center', 'row-reverse')};
    button {
      min-height: 2rem;
      max-width: 25rem;
    }
  }
`;

const getItemStyle = ({ isCartItem }) => {
  if (isCartItem) {
    return cartItem;
  }
  return ProductItem;
};

const getDetailsStyle = ({ isDetails }) => {
  if (isDetails) {
    return detailsStyles;
  }
};

export const ItemCard = styled(Card)`
  ${getItemStyle}
  ${getDetailsStyle}
`;

const getDescriptionStyle = ({ isCartItem }) => {
  if (isCartItem) {
    return cartItemDescription;
  }
  return ProductItemDescription;
};

const getDetailsDescription = ({ isDetails }) => {
  if (isDetails) return detailsDescription;
};

export const DescriptionCard = styled(Card)`
  ${getDescriptionStyle}
  ${getDetailsDescription}
`;
