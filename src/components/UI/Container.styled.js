import styled, { css } from 'styled-components';

import { devices } from '../shared/breakpoints';
import { getLayout } from '../shared/utils';
import { flexMixin, maxContainer } from '../shared/mixins';
import { buttonElevationMid } from '../shared/shadows';

const sectionDefaults = css`
  width: 100vw;
  height: auto;
`;

export const StyledHero = styled.section`
  ${sectionDefaults};
  ${getLayout};
  background: ${({ bgClr }) => bgClr || 'inherit'};
  max-height: ${({ mHeight }) => mHeight || '45vh'};

  height: ${({ h }) => h || '45vh'};

  & > div {
    max-height: 45vh;
  }
  & > .cta-wrapper {
    padding: 3rem;
    margin: auto;
    width: fit-content;
    height: fit-content;
    p {
      font-size: 2rem;
    }
  }
  & > .landing-img {
    height: 45vh;
    width: 100%;
    max-width: 55vw;
    img {
      max-width: 100%;
      width: auto;
    }
  }

  button {
    margin-block: 2rem;
    ${buttonElevationMid};
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
  .notFound-msg {
    text-align: center;
    & > p {
      margin-top: 2vh;
      font-size: 2rem;
    }
  }

  @media ${devices.laptop}, ${devices.landscapeMobileSS} {
    grid-template-columns: 1fr;

    & > .landing-img {
      width: fit-content;
      position: absolute;
      bottom: 0;
      height: 90vh;
      max-height: 90vh;
      max-width: 45vw;
    }
    & > .img1-cont {
      display: none;
    }
    & > .cta-wrapper {
      width: auto;
      z-index: 10;
      border-radius: 1rem;
      justify-self: center;
    }
    & > .cta-wrapper1 {
      position: absolute;
      top: 50%;
      left: 30%;
      transform: translate(-50%, -50%);
      align-items: center;
      justify-content: space-between;
      padding: 0;
      gap: 5vh;
      & > article {
        width: 30vw;
        text-align: center;
      }
      & > a {
        width: 100%;
        text-align: center;
        & > button {
          width: 100%;
          margin-block: 0;
          font-size: 2.25rem;
        }
      }
    }
    & > .cta-wrapper2 {
      display: none;
    }
  }
  @media ${devices.landscapeMobileS}, ${devices.laptop} {
    article {
      width: 30vw;
      text-align: center;
      p {
        font-size: 2.8rem;
      }
      h2 {
        font-size: 4rem;
      }
    }
    button {
      padding: 3rem 4rem;
    }
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
  @media ${devices.landscapeMobileSS} {
    height: 25%;
    & > article {
      height: 100%;
      max-height: 25vh;
    }
    .text-wrapper {
      gap: 1.5rem;
    }
    .img-cont,
    .img-cont2 {
      height: 100%;
      max-height: 25vh !important;
      overflow: hidden;
      img {
        max-height: 25vh;
      }
    }
  }
  @media ${devices.laptop} {
    & > article {
      width: 95%;
      margin: auto;
    }
  }
`;

export const StyledSection = styled.section`
  ${sectionDefaults}
  width: 95%;
  margin: auto;
  margin-block: 2vh;
  ${getLayout}
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.laptopM} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.laptopL} {
    gap: 1rem;
  }
  @media ${devices.landscapeMobileSS} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
