import styled, { css } from 'styled-components';
import { devices } from '../shared/breakpoints';
import { getLayout } from '../shared/utils';
import { flexMixin } from '../shared/mixins';

const baseCardSettings = css`
  width: ${({ w }) => w || 'initial'};
  height: ${({ h }) => h || 'auto'};
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

export const ItemCard = styled(Card)`
  height: 100%;
  width: 90%;
  margin: auto;
  ${flexMixin('center', 'center', 'column')};
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBg};
  & > div {
    max-height: 35rem;
    width: 25rem;
    padding: 2rem;
  }

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
  h4 {
    text-align: center;
  }
`;

export const DescriptionCard = styled(Card)`
  height: 100%;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBg};
  ${flexMixin('center', 'flex-start', 'column')};
  gap: 1rem;
  padding: 1rem;
  line-height: 1.75;
  button {
    min-height: 2rem;
    width: 100%;
  }
  p {
    letter-spacing: 0.1015rem;
    font-weight: 500;
  }
  h4 {
    text-align: left;
  }
`;
