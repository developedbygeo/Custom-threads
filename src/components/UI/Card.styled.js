import styled, { css } from 'styled-components';
import { devices } from '../shared/breakpoints';
import { getLayout } from '../shared/utils';

const baseCardSettings = css`
  width: ${({ w }) => w || 'initial'};
`;

export const Card = styled.div`
  padding: ${({ p }) => p || '2rem'};
  background: ${({ theme, BgClr }) => BgClr || theme.colors.cardBgClr};
  margin: ${({ customMargin }) => customMargin || 'auto'};
  text-align: ${({ textAlign }) => textAlign || 'initial'};
  ${getLayout}
  ${baseCardSettings}

  &>div {
    width: ${({ w }) => w || '100%'};
  }

  p {
    margin-block: 1rem;
  }
`;

export const ImageCard = styled.div`
  width: auto;
  height: auto;
  max-width: fit-content;
  max-height: fit-content;
  align-self: ${({ alignSelf }) => alignSelf || 'initial'};
  justify-self: ${({ justifySelf }) => justifySelf || 'initial'};
  text-align: ${({ textAlign }) => textAlign || 'initial'};
  & > img {
    max-width: 30rem;
    height: 100%;
  }
`;
