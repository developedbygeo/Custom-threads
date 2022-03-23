import { createGlobalStyle } from 'styled-components';

import { devices } from './breakpoints';
import { flexMixin, maxContainer, customScrollbar } from './mixins';

import wall from '../../assets/page-content/wall-pattern.jpg';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    @media ${devices.mobileSS}{
      font-size: 19%;
    }
    @media ${devices.mobileS}{
      font-size: 30%;
    }
    @media ${devices.mobileM}{
      font-size: 35%;
    }
    @media ${devices.mobileL}{
      font-size: 42%;
    }
    @media ${devices.tablet}{
      font-size: 51%;
    }
    @media ${devices.laptop}{
      font-size: 53.5%;
    }
    @media ${devices.laptopM}{
      font-size: 55.5%;
    }
    @media ${devices.laptopL}{
      font-size: 60.5%;
    }
    @media ${devices.desktop}{
      font-size: 70.5%;
    }
    @media ${devices.landscapeMobileSS}{
      font-size: 22%;
    }
    @media ${devices.landscapeMobileS}{
      font-size: 30%;
    }
    @media ${devices.landscapeMobileM}{
      font-size: 32.5%;
    }
    @media ${devices.landscapeMobileL}{
      font-size: 35%;
    }
    @media ${devices.desktop4K}{
      font-size: 90%;
    }
}

body{
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
}
#root{
  box-sizing: border-box;
  ${maxContainer};
  &>svg{
    ${maxContainer};
  }
}
main{
    position: relative;
    height: 90vh;
    width: 100vw;
    margin: auto;
    background: ${({ theme }) => theme.colors.mainBg};
    overflow-y: auto;
    ${customScrollbar};

    &>svg{
      ${maxContainer};
    }

    &>.loading{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ${flexMixin('center', 'center', 'column')};
      gap: 10vh;
    }

    &>.wall{
      background: url(${wall}) no-repeat center;
      background-size: cover;
    }
}

h1 {
  font-size: 3.2rem;
  font-family: 'Libre Baskerville', serif;}

h2 {
  font-size: 2.4rem;
  font-weight: 600
}

h3 {
  font-size: 2rem;
  font-weight: 500;
}

h2, h3{
  font-family: 'Roboto', sans-serif;  
  letter-spacing: 0.1rem;
  font-weight: 700;
}

p,
button,
select,
input,
textarea,
label,
div,
li,
a {
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
}
button, a{
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

footer{
  height: 5vh;
  ${flexMixin('center', 'flex-end', 'row')};
  gap: 2rem;
  padding-block: 1rem;
  background: ${({ theme }) => theme.colors.heroBg};
  a{
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.15rem;
    text-decoration: underline;
  }
  svg{
    width: 3rem;
    height: 2.5rem;
    transition: all 400ms ease-in-out;
    color: ${({ theme }) => theme.colors.accent};
    &:hover{
      transform: rotate(360deg) scale(1.1);
    }
  }
}
`;

export default GlobalStyle;
