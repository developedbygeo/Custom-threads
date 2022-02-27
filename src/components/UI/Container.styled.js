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
  max-height: 45vh;

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
  background: ${({ theme }) => theme.colors.promoText};
  color: ${({ theme }) => theme.colors.mainBg};

  & > article {
    width: 90%;
    max-height: 20vh;
    margin: auto;
    ${flexMixin('center', 'center', 'row')}
    /* text container */
    &>div:nth-child(1) {
      ${flexMixin('center', 'flex-start', 'column')};
      gap: 3rem;
      flex: 2;
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
    /* image container */
    & > div:nth-child(2) {
      max-height: 20vh;
    }
    img {
      max-width: 25rem;
      max-height: 20vh;
    }
  }
`;

export const StyledSection = styled.section`
  ${sectionDefaults}
  width: 95%;
  margin: auto;
  ${getLayout}
`;
