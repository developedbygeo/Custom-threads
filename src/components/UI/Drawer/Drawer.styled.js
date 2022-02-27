import styled from 'styled-components';

export const StyledDrawer = styled.aside`
  position: sticky;
  top: 7%;
  z-index: 10;
  max-width: 40vw;
  height: auto;
  background: ${({ theme }) => theme.colors.mainBg};
`;
