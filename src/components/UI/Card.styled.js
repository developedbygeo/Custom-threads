import styled, { css } from 'styled-components';
import { devices } from '../shared/breakpoints';
import { flexMixin } from '../shared/mixins';
import { bumpText } from '../shared/animations';

const Card = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background: ${({ theme, BgClr }) => BgClr || theme.colors.cardBgClr};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);

  & > .bump {
    animation: ${bumpText} 400ms ease-out;
  }
`;

export default Card;
