import styled from 'styled-components';
import { flexMixin } from '../shared/mixins';

const StyledFilters = styled.form`
  padding: 1.25rem;
  margin-top: 3vh;
  gap: 3rem;
  z-index: 20;
  position: absolute;
  ${flexMixin('center', 'flex-start', 'column')};
  background: ${({ theme }) => theme.colors.mainBg};
  & > h3 {
    font-weight: 500;
  }
  & > div {
    width: 100%;
    position: relative;
    ${flexMixin('space-between', 'center', 'row')}
  }
`;

export default StyledFilters;
