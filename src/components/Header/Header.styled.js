import styled from 'styled-components';
import { flexMixin } from '../shared/mixins';

const StyledHeader = styled.header`
  width: 100vw;
  height: 10vh;
  position: sticky;
  padding: 2rem;
  top: 0%;
  ${flexMixin('space-evenly', 'center', 'row')};

  & > h1 {
    letter-spacing: 0.15rem;
    flex: 2;
  }
  & > nav {
    ${flexMixin('space-between', 'flex-end;', 'row')};
    gap: 1rem;
    flex: 1;
    justify-self: flex-end;
  }
  button {
    border: none;
    outline: none;
    background: transparent;
    min-width: 5.5rem;
    min-height: 5.5rem;
    font-size: 1.8rem;
    ${flexMixin('center', 'center', 'row')}
  }
  svg {
    color: ${({ theme }) => theme.colors.mainText};
    min-width: 2rem;
    min-height: 2rem;
    max-width: 65%;
    max-height: 80%;
  }
  .bag {
    max-width: 60%;
  }
`;

export default StyledHeader;
