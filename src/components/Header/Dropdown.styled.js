import styled from 'styled-components';

import { flexMixin } from '../shared/mixins';

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
  @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {
    background: rgba(${({ theme }) => theme.colors.mainBgRGB}, 0.8);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }

  & > a {
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
`;

export default StyledDropdown;
