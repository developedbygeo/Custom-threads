import styled from 'styled-components';

import { StyledSection } from '../UI/Container.styled';
import { formBaseStyle, messageStyle } from '../shared/styles/miscStyling';
import { flexMixin, maxContainer } from '../shared/mixins';

const StyledLogin = styled(StyledSection)`
  height: 65vh;
  width: 100%;
  margin-top: 4vh;
  ${messageStyle};
  & > .close-btn {
    position: absolute;
    right: 0%;
    top: 2%;
  }
  & > .login-header {
    width: 80%;
    margin: auto;
    ${flexMixin('space-between', 'flex-start', 'column')};
    gap: 2rem;
    .logo {
      color: ${({ theme }) => theme.colors.activeNav};
    }
    p {
      font-weight: 300;
      letter-spacing: 0.125rem;
    }
    .action-prompt {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${({ theme }) => theme.colors.accent};
      }
    }
  }
  & > form {
    flex: 2;
    height: 90%;
    ${formBaseStyle};
    width: 75%;
    margin: auto;
    ${flexMixin('space-evenly', 'center', 'column')};
    & > .data-field {
      width: 100%;
    }
  }
  .sign-in {
    ${flexMixin('center', 'center', 'row')};
    gap: 2rem;
    p {
      padding-top: 0.25rem;
    }
  }
  & > .svg-success {
    ${flexMixin('center', 'center', ' column')};
    ${maxContainer};
    & > svg {
      ${maxContainer}
    }
  }
  .success-actions {
    ${flexMixin('space-between', 'center', 'row')};
    width: 75%;
    margin: auto;
  }
`;

export default StyledLogin;
