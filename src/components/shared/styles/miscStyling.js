import { css } from 'styled-components';

import { flexMixin } from '../mixins';

export const labelStyle = css`
  font-weight: 300;
  font-size: 2rem;
`;

export const smallIconStyle = css`
  .smallIcon > svg {
    max-width: 2.5rem;
    width: 2.5rem;
  }
`;

export const formBaseStyle = css`
  width: 100%;
  height: 50%;
  ${flexMixin('center', 'center', 'column')};
  gap: 3vh;
  & > .data-field {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
    ${flexMixin('center', 'flex-start', 'column')};
  }
  input,
  label {
    font-size: 2rem;
  }
`;

export const messageStyle = css`
  .msg {
    text-align: center;
    font-weight: 300;
    svg {
      width: 2rem;
      height: 2rem;
      margin-left: 1.25rem;
      margin-bottom: 0.4rem;
    }
    .small-svg {
      width: 3rem;
      height: 3rem;
      margin-left: 1rem;
    }
  }
  .success {
    color: ${({ theme }) => theme.colors.success};
  }
  .error {
    color: ${({ theme }) => theme.colors.error};
  }
  .success,
  .error {
    font-weight: 500;
  }
`;
