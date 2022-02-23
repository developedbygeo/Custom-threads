import styled from 'styled-components';
import { flexMixin } from '../shared/mixins';

const StyledHeader = styled.header`
  width: 100vw;
  height: 10vh;
  position: relative;
  padding: 2rem;
  ${flexMixin('space-evenly', 'center', 'row')};
  & > a {
    flex: 2;
  }
  & > div {
    position: relative;
  }

  & > h1 {
    letter-spacing: 0.15rem;
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
    transition: all 150ms ease-in-out;
    ${flexMixin('center', 'center', 'row')}
    color: ${({ theme }) => theme.colors.mainText};
    &:hover {
      color: ${({ theme }) => theme.colors.activeNav};
    }
  }
  svg {
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
