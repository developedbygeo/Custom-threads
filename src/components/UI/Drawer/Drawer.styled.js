import styled from 'styled-components';

export const StyledDrawer = styled.aside`
  position: absolute;
  top: 80%;
  z-index: 10;
  max-width: 40vw;
  height: auto;
  background: ${({ theme }) => theme.colors.mainBg};
`;
