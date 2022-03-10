import styled, { css } from 'styled-components';
import { getLayout } from '../shared/utils';

const stickyCardUtility = css`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.cardBg};
  box-shadow: 1px 6px 2px -1px rgba(0, 0, 0, 0.09);
`;

const isCardUtility = ({ sticky }) => {
  if (sticky) {
    return stickyCardUtility;
  }
};

const baseCardSettings = css`
  width: ${({ w }) => w || 'initial'};
  height: ${({ h }) => h || 'auto'};
`;

export const Card = styled.div`
  padding: ${({ p }) => p || '2rem'};
  background: ${({ theme, BgClr }) => BgClr || theme.colors.cardBgClr};
  margin: ${({ customMargin }) => customMargin || 'auto'};
  text-align: ${({ textAlign }) => textAlign || 'initial'};
  position: ${({ customPosition }) => customPosition || 'static'};
  top: ${({ top }) => top || 'initial'};
  ${getLayout}
  ${baseCardSettings}
  ${isCardUtility}

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
