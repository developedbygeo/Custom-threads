import styled, { css } from 'styled-components';

import { devices } from '../shared/breakpoints';
import { getLayout } from '../shared/utils';
import { flexMixin, maxContainer } from '../shared/mixins';
import { svgAdjustments, cartStyling, cartActions, priceStyling } from '../shared/styles/cartStyling';

const sectionDefaults = css`
  width: 100vw;
  height: auto;
`;

export const StyledHero = styled.section`
  ${sectionDefaults};
  ${getLayout};
  background: ${({ bgClr }) => bgClr || 'inherit'};
  max-height: ${({ mHeight }) => mHeight || '45vh'};
  height: ${({ h }) => h || 'initial'};

  & > div {
    max-height: 45vh;
  }

  button {
    margin-block: 2rem;
  }
  p {
    font-weight: 300;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
  }
  h2 {
    margin-block: 0.5rem;
  }

  .notFound img {
    ${maxContainer}
  }
  .notFound button {
    font-size: 2.4rem;
  }
`;

export const StyledPromo = styled.section`
  ${sectionDefaults};
  background: ${({ customBg, theme }) => customBg || theme.colors.promoText};
  color: ${({ customClr, theme }) => customClr || theme.colors.mainBg};

  & > article {
    width: 90%;
    max-height: 20vh;
    margin: auto;
    ${flexMixin('center', 'center', 'row')};
    flex-direction: ${({ rowReverse }) => rowReverse && 'row-reverse'};
    & > .text-wrapper {
      ${flexMixin('center', 'flex-start', 'column')};
      gap: 3rem;
      flex: 2;
      text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
      & > div {
        ${flexMixin('center', 'flex-start', 'column')};
        gap: 1.25rem;
        & > span {
          font-weight: 500;
          letter-spacing: 0.1025rem;
          text-decoration: underline;
        }
      }
    }

    & > .img-cont {
      max-height: 20vh;
    }
    img {
      max-width: 25rem;
      max-height: 20vh;
    }
  }
  /* dual image setup */
  .dualImageBanner {
    position: relative;
    justify-content: space-between;
    @media ${devices.tablet} {
      justify-content: space-between;
    }
    & > .img-cont,
    .img-cont2 {
      max-height: 20vh;
    }
    img {
      max-width: 50vw;
    }
    .text-wrapper {
      padding: 1.5rem 0.5rem;
      text-align: center;
      align-items: center;
      gap: 1rem;
      p {
        font-weight: 400;
        letter-spacing: 0.125rem;
      }
    }
  }
`;

export const StyledSection = styled.section`
  ${sectionDefaults}
  width: 95%;
  margin: auto;
  margin-top: 2vh;
  ${getLayout}
`;

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
    .step {
      background: rgba(${({ theme }) => theme.colors.activeNavRGB}, 0.8);
      color: ${({ theme }) => theme.colors.mainBg};
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
      font-weight: 300;
      letter-spacing: 0.125rem;
      font-size: 1.9rem;
    }
    .step-description::first-letter {
      text-transform: capitalize;
    }
  }
`;
