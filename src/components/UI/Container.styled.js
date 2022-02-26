import styled, { css } from 'styled-components';

import { getLayout } from '../shared/utils';

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

export const StyledSection = styled.section`
  ${sectionDefaults};
  overflow-y: auto;
`;
