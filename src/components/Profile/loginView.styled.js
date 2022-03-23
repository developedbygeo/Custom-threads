import { css } from 'styled-components';

import { devices } from '../shared/breakpoints';
import loginBlob from '../../assets/blobs/loginblob.png';

export const loginView = css`
  .login-blob {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: 0%;
    background: url(${loginBlob}) center no-repeat;
    background-size: cover;
    pointer-events: none;
    opacity: 0.35;
  }
  @media ${devices.tablet} {
    height: 55vh;
    width: 60vw;
  }
  @media ${devices.laptop} {
    width: 45vw;
    height: 65vh;
  }
  @media ${devices.landscapeMobileSS} {
    height: 90vh;
    width: 60vw;
  }
`;
