import { css } from 'styled-components';

import { devices } from '../shared/breakpoints';
import { flexMixin } from '../shared/mixins';
import { cartStyling, svgAdjustments, cartActions, priceStyling } from '../shared/styles/cartStyling';

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
  & > .not-found {
    line-height: 24px;
  }
  ${cartStyling};
  ${svgAdjustments};
  ${cartActions};
  ${priceStyling};

  .action-wrapper {
    width: 100%;
    ${flexMixin('space-between', 'center', 'row')};
  }
  .single-btn-layout {
    justify-content: center;
  }

  @media ${devices.tablet} {
    .cart {
      width: 95%;
      margin: auto;
      max-height: 65vh;
    }
    .price-wrapper {
      width: 95%;
      margin: auto;
    }
  }

  @media ${devices.laptop} {
    width: 60vw;
  }
`;
