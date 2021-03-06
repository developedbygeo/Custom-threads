import styled from 'styled-components';

import { flexMixin, maxContainer } from '../../shared/mixins';

const StyledCheckbox = styled.div`
  padding: ${({ p }) => p || '1.25rem'} ${flexMixin('center', 'flex-start', 'column')};
  gap: ${({ gap }) => gap || '2rem'};

  input[type='checkbox'] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .checkbox {
    position: absolute;
    top: 0;
    right: 0;
    height: 3rem;
    width: 3rem;
    border: 1px solid ${({ theme }) => theme.colors.davysGrayCta};
    background: ${({ theme }) => theme.colors.mainBg};
    transition: all 50ms linear;
    svg {
      ${maxContainer};
    }
  }
  @media (hover: hover) {
    .checkbox:hover {
      background: rgba(${({ theme }) => theme.colors.activeNavRGB}, 0.75);
      border: none;
    }
  }
  .checkbox--active {
    background: rgba(${({ theme }) => theme.colors.activeNavRGB}, 0.95);
    svg {
      color: ${({ theme }) => theme.colors.mainBg};
    }
  }
`;

export default StyledCheckbox;
