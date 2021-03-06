import styled from 'styled-components';

import { devices } from '../shared/breakpoints';
import { flexMixin, transparentBlur } from '../shared/mixins';

const StyledDropdown = styled.div`
  padding: 2rem;
  max-width: 20rem;
  min-width: 15rem;
  height: auto;
  position: absolute;
  right: 1%;
  z-index: 11;
  box-shadow: 9px 13px 15px -6px rgba(0, 0, 0, 0.42);
  background: ${({ theme }) => theme.colors.mainBg};
  ${flexMixin('center', 'center', 'column')};
  gap: 3rem;
  ${transparentBlur};

  & > a {
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  @media ${devices.tablet} {
    gap: 6rem;
  }
`;

export default StyledDropdown;
