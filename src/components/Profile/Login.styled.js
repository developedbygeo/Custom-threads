import styled from 'styled-components';

import { devices } from '../shared/breakpoints';
import { StyledSection } from '../UI/Container.styled';
import { formBaseStyle, messageStyle } from '../shared/styles/miscStyling';
import { flexMixin, maxContainer } from '../shared/mixins';

const StyledLogin = styled(StyledSection)`
  height: 100%;
  width: 100%;
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
    max-height: 75vh;
    & > .success-svg-wrapper {
      height: 80%;
      width: 100%;
      & > svg {
        height: 100%;
        width: 100%;
        margin: auto;
      }
    }
  }
  .success-actions {
    ${flexMixin('space-between', 'center', 'row')};
    width: 75%;
    height: 100%;
    margin: auto;
  }
  @media ${devices.mobileSS} {
    gap: 2rem;
    & > .svg-success {
      gap: 2rem;
      svg {
        width: 75%;
      }
    }
  }
  @media ${devices.tablet} {
    margin-top: 1vh;
  }
  @media ${devices.laptop} {
    width: 80%;
    margin: auto;

    & > form,
    & > .login-header {
      width: 65%;
      margin: auto;
    }
    & > .login-header {
      padding-top: 1rem;
    }
    & > .svg-success {
      ${flexMixin('center', 'center', ' column')};
      height: 85%;
      width: 85%;
      margin: auto;
      & > svg {
        height: 85%;
        width: 85%;
        margin: auto;
      }
    }
  }
  @media ${devices.landscapeMobileSS} {
    gap: 0;
    margin: 0;
    & > .svg-success > svg {
      transform: scale(1);
    }
  }
`;

export default StyledLogin;
