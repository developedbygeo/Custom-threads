import styled from 'styled-components';

import { devices } from '../shared/breakpoints';
import { flexMixin, colorInteract, showActive, underlineEffect } from '../shared/mixins';

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
    ${flexMixin('space-between', 'center', 'row')};
    gap: 1rem;
    flex: 1;
    justify-self: flex-end;
    height: 100%;
    div {
      height: auto;
    }
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
    ${colorInteract}
  }
  a:not(.logo) {
    font-weight: 400;
    letter-spacing: 0.125rem;
    padding: 1rem 2rem;
    ${underlineEffect}
  }
  .active {
    ${showActive}
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
  .logged-in {
    color: ${({ theme }) => theme.colors.success};
  }
  .bag {
    max-width: 4.5rem;
  }
  .total {
    margin-left: 1rem;
  }
  .desktopNav {
    ${flexMixin('space-between', 'center', 'row')};
    flex: 3.5;
    & > div {
      ${flexMixin('space-evenly', 'center', 'row')};
      gap: 2rem;
      &:not(.desktopNavCtrl) {
        margin-right: 5vw;
        border: 2px solid ${({ theme }) => theme.colors.mainBg};
        border-inline: none;
      }
    }
  }
  @media ${devices.tablet} {
    .mobileNav {
      justify-content: space-around;
      flex: 0.75;
    }
  }
  @media ${devices.laptop} {
    height: 10vh;
    width: 95vw;
    margin: auto;
    padding: 0;
  }
`;

export default StyledHeader;
