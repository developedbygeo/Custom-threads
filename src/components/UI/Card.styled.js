import styled, { css } from 'styled-components';
import { getLayout } from '../shared/utils';

const stickyCardUtility = css`
  position: sticky;
  top: 0;
  z-index: 10;
`;

const controlsStyling = css`
  background: ${({ theme }) => theme.colors.cardBg};
  box-shadow: 0px 6px 2px -1px rgba(0, 0, 0, 0.09);
`;

const isCardUtility = ({ sticky }) => {
  if (sticky === true) {
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

  & > div {
    width: ${({ w }) => w || '100%'};
  }

  p {
    margin-block: 1rem;
  }
`;

export const ActionWrapper = styled.div`
  background: ${({ theme, BgClr }) => BgClr || theme.colors.cardBg};
  ${getLayout};
  ${baseCardSettings};
  ${isCardUtility};
  ${controlsStyling};
  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {
    background: rgba(${({ theme }) => theme.colors.cardBgRGB}, 0.55);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }

  .active {
    color: ${({ theme }) => theme.colors.activeNav};
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
