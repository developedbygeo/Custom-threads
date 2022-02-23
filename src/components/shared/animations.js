import { keyframes } from 'styled-components';

export const houdini = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;

export const spinning = keyframes`
from{
    transform: rotate(0deg)
}to{
    transform: rotate(360deg);
}
`;

export const bumpText = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9865);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.135);
  }
  100% {
    transform: scale(1);
  }
`;
