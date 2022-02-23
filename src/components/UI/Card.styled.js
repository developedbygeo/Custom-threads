import styled from 'styled-components';
import { devices } from '../shared/breakpoints';
import { getLayout } from '../shared/utils';

export const Card = styled.div`
  padding: ${({ p }) => p || '2rem'};
  background: ${({ theme, BgClr }) => BgClr || theme.colors.cardBgClr};
  margin: ${({ customMargin }) => customMargin || 'initial'};
  ${getLayout}

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
  & > img {
    max-width: 30rem;
    height: 100%;
  }
`;
