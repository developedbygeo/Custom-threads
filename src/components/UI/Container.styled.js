import styled, { css } from 'styled-components';

import { devices } from '../shared/breakpoints';
import { getLayout } from '../shared/utils';
import { flexMixin } from '../shared/mixins';

const sectionDefaults = css`
  width: 100vw;
  height: auto;
`;

export const StyledHero = styled.section`
  ${sectionDefaults};
  ${getLayout};
  background: ${({ bgClr }) => bgClr || 'inherit'};
  max-height: ${({ mHeight }) => mHeight || '45vh'};

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
