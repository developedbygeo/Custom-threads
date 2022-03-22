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
  & > .landing-img {
    height: 100%;
    width: 100%;
    img {
      max-width: initial;
      width: 100%;
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
  @media ${devices.tablet} {
    & > .cta-wrapper {
      width: 85%;
      button {
        padding: 3rem 5rem;
      }
      h2,
      h3,
      p {
        font-size: 2.8rem;
      }
    }
    & > .cta-wrapper2 {
      margin-left: 15vw;
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
`;
