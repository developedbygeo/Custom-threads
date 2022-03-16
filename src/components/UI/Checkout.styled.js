import styled from 'styled-components';

import { StyledSection } from './Container.styled';
import { svgAdjustments, cartStyling, cartActions, priceStyling } from '../shared/styles/cartStyling';
import { formBaseStyle, messageStyle } from '../shared/styles/miscStyling';

import { flexMixin, maxContainer } from '../shared/mixins';
import { houdini } from '../shared/animations';

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
      width: 4rem;
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
    margin-top: 1vh;
    svg {
      width: 2.5rem;
      margin-bottom: 0.5rem;
    }
    .svg-wrap {
      margin-right: 1rem;
    }
  }
`;
