import styled from 'styled-components';

import { flexMixin, gridMixin, colorInteract, showActive } from '../shared/mixins';
import { devices } from '../shared/breakpoints';

const StyledHeader = styled.header`
  width: 100vw;
  height: 10vh;
  position: relative;
  padding: 0 2rem;
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
    min-height: 7.5rem;
    font-size: 1.8rem;
    transition: all 150ms ease-in-out;
    ${flexMixin('center', 'center', 'row')}
  }
  button,
  a:not(.logo) {
    ${colorInteract()}
  }
  .active {
    ${showActive()}
  }
  svg,
  span {
    width: 100%;
    height: 100%;
    min-width: 2rem;
    min-height: 2rem;
    max-width: 4rem;
    max-height: 80%;
  }
  .bag {
    max-width: 4.5rem;
  }
  .total {
    margin-left: 1rem;
  }

  @media screen and (max-width: 900px) {
    .desktopNav {
      display: none;
    }
  }
  @media screen and (min-width: 900px) {
    .mobileNav {
      display: none;
    }
    .desktopNav {
      ${flexMixin('space-between', 'center', 'row')};
      flex: 3.5;
      & > div {
        ${flexMixin('space-evenly', 'center', 'row')};
        gap: 2rem;
        &:not(.desktopNavCtrl) {
          height: 8vh;
          border: 2px solid ${({ theme }) => theme.colors.heroBg};
          border-inline: none;
        }
      }
    }
  }
`;

export default StyledHeader;
