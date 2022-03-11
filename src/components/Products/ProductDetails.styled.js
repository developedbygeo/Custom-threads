import { css } from 'styled-components';

import { flexMixin } from '../shared/mixins';

export const detailsStyles = css`
  min-height: 80vh;
  height: auto;
  margin: auto;
  margin-top: 2vh;
  padding: 2rem;
  ${flexMixin('flex-start', 'center', 'column')};
  & > .img-wrapper {
    max-width: 20rem;
    padding: 0;
    margin: auto;
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
`;
