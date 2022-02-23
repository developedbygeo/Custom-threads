import styled from 'styled-components';

import { flexMixin } from '../shared/mixins';

const StyledDropdown = styled.div`
  padding: 2rem;
  max-width: 20rem;
  min-width: 15rem;
  max-height: 30vh;
  height: auto;
  position: absolute;
  bottom: -25vh;
  right: 1%;
  z-index: 10;
  box-shadow: 9px 13px 15px -6px rgba(0, 0, 0, 0.42);
  background: ${({ theme }) => theme.colors.mainBg};
  ${flexMixin('center', 'center', 'column')};
  gap: 3rem;

  & > a {
    letter-spacing: 0.1rem;
    font-weight: 500;
    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.activeNav};
      }
    }
  }
  .active {
    color: ${({ theme }) => theme.colors.activeNav};
    position: relative;
    &::before {
      position: absolute;
      content: '';
      bottom: -0.5rem;
      width: 100%;
      height: 0.15rem;
      background: ${({ theme }) => theme.colors.activeNav};
    }
  }
`;

export default StyledDropdown;
