import { css } from 'styled-components';

import { devices } from '../shared/breakpoints';
import { flexMixin, gridMixin } from '../shared/mixins';

export const detailsStyles = css`
  min-height: 80vh;
  height: auto;
  margin: auto;
  margin-top: 2vh;
  padding: 2rem;
  box-shadow: none;
  ${flexMixin('flex-start', 'center', 'column')};
  & > .img-wrapper {
    max-width: 20rem;
    padding: 0;
    margin: auto;
    @media ${devices.laptop} {
      width: 90%;
      img {
        width: auto;
        height: 100%;
        max-height: 35rem;
      }
    }
  }
  @media ${devices.mobileS} {
    width: 100%;
    img {
      max-height: 30rem;
    }
  }
  @media ${devices.laptop} {
    height: 100%;
    border: none;
    width: 95%;
    margin: auto;
    ${gridMixin('0.8fr 1fr', '1fr')};
    gap: 5vw;
    & > .img-wrapper {
      height: auto;
      img {
        max-height: 45rem;
      }
    }
  }
`;

export const detailsDescription = css`
  height: auto;
  justify-content: space-evenly;
  text-align: left;
  margin-block: 0;

  .info-wrapper {
    padding-inline: 2.5rem;
    .prod-desc {
      font-weight: 300;
      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  h2 {
    margin-block: 4vh;
    text-align: left;
  }
  .price {
    text-align: right;
    font-size: 2.1rem;
  }
  @media ${devices.laptop} {
    width: 100%;
    margin: auto;
    border-top: none;
    border-left: 1px solid ${({ theme }) => theme.colors.heroBg};
  }
`;
