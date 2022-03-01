import styled from 'styled-components';
import { flexMixin } from '../shared/mixins';
import { labelStyle } from '../shared/styles/miscStyling';

const StyledFilters = styled.form`
  position: absolute;
  z-index: 20;
  padding: 1.25rem;
  margin-top: 3vh;
  gap: 3rem;
  padding: 3rem;
  background: rgba(${({ theme }) => theme.colors.filtersRGB}, 0.9);
  backdrop-filter: blur(10px);
  ${flexMixin('center', 'flex-start', 'column')};
  & > h3 {
    font-weight: 500;
  }
  & > div {
    width: 100%;
    position: relative;
    ${flexMixin('space-between', 'center', 'row')}
  }
  label {
    ${labelStyle}
  }
  .price > label {
    font-size: 2rem;
  }
  .selected-price {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export default StyledFilters;
