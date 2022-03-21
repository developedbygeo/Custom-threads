import styled from 'styled-components';

import { devices } from '../shared/breakpoints';
import { StyledSection } from './Container.styled';
import { svgAdjustments, cartStyling, cartActions, priceStyling } from '../shared/styles/cartStyling';
import { formBaseStyle, messageStyle } from '../shared/styles/miscStyling';

import { flexMixin, gridMixin, customScrollbar, maxContainer } from '../shared/mixins';
import { boxElevationMid } from '../shared/shadows';
import { houdini } from '../shared/animations';

import checkoutBg from '../../assets/page-content/checkout.webp';
import checkoutBlob from '../../assets/blobs/checkoutBlob.png';
import successBlob from '../../assets/blobs/successBlob.png';

// TODO StyledCheckout tablet landscape width 70%;
export const StyledCheckout = styled(StyledSection)`
  ${svgAdjustments};
  ${cartStyling};
  ${cartActions};
  ${priceStyling};
  min-height: 50vh;
  margin-top: 1vh;
  justify-content: space-between;
  height: 97.5%;
  .cart {
    height: 95%;
    width: 100%;
    max-height: 72.5vh;
    margin-block: 2vh;
    ${customScrollbar};
  }
  & > .img-wrapper {
    max-width: 15rem;
    max-width: 15rem;
    padding: 0;
    img {
      padding: 1rem;
      max-height: 10rem;
      max-width: 25rem;
    }
  }
  .cart-actions {
    width: 70%;
  }
  & > .price-wrapper {
    width: 100%;
    padding: 1rem 0.5rem;
    margin-bottom: 1vh;
    font-size: 2rem;
  }
  .action-wrapper {
    ${flexMixin('space-between', 'center', 'row')};
    width: 100%;
    .return-btn {
      border: 1px solid ${({ theme }) => theme.colors.heroBg};
      transition: all 50ms ease-in-out;
      @media (hover: hover) {
        &:hover {
          border-color: ${({ theme }) => theme.colors.ctaSecondaryBgClr};
        }
      }
    }
  }
  .single-btn-layout {
    justify-content: center;
  }
  & > p {
    width: 100%;
    padding: 0.75rem;
    font-size: 2rem;
    .step {
      background: rgba(${({ theme }) => theme.colors.activeNavRGB}, 0.8);
      color: ${({ theme }) => theme.colors.mainBg};
      text-align: center;
      font-weight: 700;
      padding: 0.5rem 1rem;
      border-radius: 50%;
      margin-right: 2vw;
    }
    .step,
    .step-description {
      display: inline-block;
    }
    .step-description {
      font-weight: 400;
      letter-spacing: 0.125rem;
      font-size: 1.9rem;
    }
    .step-description::first-letter {
      text-transform: capitalize;
    }
  }

  form {
    ${formBaseStyle}
  }

  .form-action {
    margin: 0;
    margin-bottom: 5vh;
    & > button {
      border-bottom: 1px solid ${({ theme }) => theme.colors.heroBg};
    }
    ${flexMixin('center', 'flex-end', 'row')};
  }

  ${messageStyle};

  .not-found {
    line-height: 24px;
  }

  .success-header {
    ${maxContainer};
    & > h2 {
      text-align: center;
      margin-top: 3vh;
    }
    & > .success-text {
      margin-top: 5vh;
    }
    & > .success-text,
    .action-wrapper {
      ${flexMixin('center', 'center', 'column')};
      gap: 2rem;
      p {
        letter-spacing: 0.115rem;
        font-weight: 300;
      }
    }
    .svg-cont {
      height: 70%;
      width: 100%;
      svg {
        ${maxContainer};
        #success-indicator {
          animation: ${houdini} 3s ease-in;
        }
      }
    }
  }
  .action-wrapper {
    display: flex;
    margin-block: 1vh;
    svg {
      width: 2.5rem;
      margin-bottom: 0.5rem;
    }
    .svg-wrap {
      margin-right: 1rem;
    }
  }
  @media screen and (max-width: 1300px) {
    .blob {
      display: none;
    }
  }

  @media ${devices.laptop} {
    width: 80%;
    margin-top: 0;
    ${gridMixin('1fr 0.3fr 1fr', '0.1fr 1fr 0.1fr 0.2fr')};
    .step-indicator {
      margin-top: 2vh;
      ${boxElevationMid};
      border-radius: 1.5rem;
      padding: 1rem;
      max-width: 30vw;
    }
    .cart {
      height: 90%;
      ${boxElevationMid};
      grid-area: 2/1/2/4;
      .cart-actions {
        width: 30%;
      }
      li {
        gap: 3rem;
      }
    }
    .price-wrapper {
      grid-area: 3/3/4/4;
      ${gridMixin('repeat(2, 1fr)', '1fr')};
      justify-items: flex-end;
      .price-header {
        justify-self: flex-start;
      }
    }
    .action-wrapper {
      grid-area: 4/3/4/4;
      ${gridMixin('repeat(2, 1fr)', '1fr')};
      justify-items: flex-end;
      button {
        ${flexMixin('center', 'center', 'row')};
        svg {
          transform: translateY(0.3rem) scale(1.15);
        }
        .cart-icon-left {
          margin-right: 1vw;
        }
        .cart-icon-right {
          margin-left: 1vw;
        }
      }
      .return-btn {
        justify-self: flex-start;
      }
    }
    form {
      grid-area: 2/3/2/4;
      & > .data-field {
        width: 75%;
      }
    }
    .img-container {
      grid-area: 2/1/5/2;
      ${maxContainer};
      background: url(${checkoutBg}) center no-repeat;
      background-size: cover;
      max-height: 80vh;
      z-index: 1;
    }
    .blob {
      position: absolute;
      bottom: 0;
      left: 0;
      background: url(${checkoutBlob}) no-repeat;
      background-size: contain;
      width: 65vw;
      height: 70vh;
      pointer-events: none;
    }
    .msg {
      grid-area: 3/3/3/4;
    }
    /* success page styling for mq*/
    &.success {
      ${gridMixin('1fr', '0.1fr 1fr')};
      & > article {
        ${flexMixin('space-between', 'center', 'column')};
        align-self: flex-start;
        height: 100%;
        .svg-cont {
          height: 50vh;
        }
      }
      .success-blob {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 30vw;
        height: 100%;
        background: url(${successBlob}) center no-repeat;
        background-size: cover;
        opacity: 0.45;
      }
    }
  }
  @media screen and (min-width: 1700px) {
    .blob {
      left: 15%;
    }
  }
`;
