import styled, { css } from 'styled-components';

import { devices } from '../shared/breakpoints';
import { Card } from '../UI/Card.styled';
import { flexMixin, gridMixin, maxContainer } from '../shared/mixins';
import { boxElevationLow } from '../shared/shadows';
import { cartItem, cartItemDescription } from '../Cart/CartItem.styled';
import { detailsStyles, detailsDescription } from './ProductDetails.styled';

const ProductItem = css`
  height: 100%;
  width: 90%;
  margin: auto;
  ${flexMixin('center', 'center', 'column')};
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBg};
  ${boxElevationLow};
  & > .img-wrapper {
    width: auto;
    ${flexMixin('center', 'center', 'row')};
    max-height: 30rem;
    padding: 3rem;
  }

  img {
    width: auto;
    height: auto;
    max-height: 20rem;
    max-width: 25rem;
    display: block;
    @media ${devices.laptopM} {
      padding: 1rem;
    }
    @media ${devices.laptopL} {
      padding: 2rem;
    }
  }
  .info-wrapper {
    .product-desc {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 60%;
    }
    padding-block: 0.75rem;

    h3 {
      text-align: center;
    }
    .price {
      color: ${({ theme }) => theme.colors.accent};
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0.15rem;
      text-align: center;
    }
  }

  .details {
    ${flexMixin('space-between', 'center', 'row')};
    ${maxContainer};

    /* rating's main span */
    & > :nth-child(1) {
      margin-top: 0.4rem;
    }
  }
  @media ${devices.mobileSS} {
    width: 85%;
  }
  @media ${devices.mobileM} {
    width: 80%;
  }
  @media ${devices.mobileL} {
    width: 90%;
  }
  @media ${devices.tablet} {
    width: 95%;
    ${gridMixin('1fr', 'repeat(2, 1fr)')};
    place-items: center;
    & > .img-wrapper {
      height: 90%;
      margin: auto;
    }
    .info-wrapper {
      ${gridMixin('1fr', 'minmax(3rem, 12rem)')};
    }
    /* adjusting the rating's parent */
    .details {
      & > :nth-child(1) {
        margin-left: 2.5rem;
      }
    }
    .rating {
      transform: scale(1.7);
    }
  }
  @media ${devices.landscapeMobileSS} {
    width: 100%;

    /* adjusting the rating's parent */
    .details {
      & > :nth-child(1) {
        margin-left: 0;
      }
    }
    .description {
      width: 100%;
    }
    .rating {
      transform: scale(1);
    }
  }
  @media ${devices.landscapeMobileS} {
    .description {
      width: 75%;
    }
  }
  @media ${devices.landscapeMobileM} {
    .description {
      width: 80%;
    }
  }
  @media ${devices.landscapeMobileL} {
    .description {
      width: 75%;
    }
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
    @media ${devices.tablet} {
      padding: 0.5rem 1rem;
      gap: 1rem;
    }
    @media ${devices.laptopM} {
      padding: 0;
      gap: 1rem;
    }
    @media ${devices.laptopL} {
      padding: 2rem;
      gap: 0;
    }
  }
  @media ${devices.laptopL} {
    padding: 0;
  }
  @media ${devices.landscapeMobileSS} {
    & > .cta-wrapper {
      padding: 0;
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
