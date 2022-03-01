import styled, { css } from 'styled-components';

const resetDefault = css`
  & {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-moz-range-thumb {
    border: none;
    border-radius: 0;
  }
`;
const CustomSlider = styled.input`
  ${resetDefault}

  /* Chromium */
  &::-webkit-slider-runnable-track {
    background: rgba(${({ theme }) => theme.colors.activeNavRGB}, 1);
    height: 1rem;
    border-radius: 0.5rem;
  }
  &::-webkit-progress-value {
    background: rgba(${({ theme }) => theme.colors.activeNavRGB}, 1);
  }

  &::-webkit-slider-thumb {
    appearance: none;
    margin-top: -0.85rem;
    background-color: ${({ theme }) => theme.colors.mainBg};
    height: 3rem;
    width: 1rem;
    border-radius: 0.5rem;
    outline: 1px solid ${({ theme }) => theme.colors.ctaEerieBlack};
    border: 1px solid ${({ theme }) => theme.colors.ctaEerieBlack};
  }
  &:focus::-webkit-slider-thumb,
  &:hover::-webkit-slider-thumb {
    outline: 1.5px solid ${({ theme }) => theme.colors.ctaEerieBlack};
  }

  /* FF */
  &::-moz-range-track {
    background: rgba(${({ theme }) => theme.colors.activeNavRGB}, 0.45);
    height: 1rem;
    border-radius: 0.5rem;
  }
  &::-moz-range-progress {
    background: rgba(${({ theme }) => theme.colors.activeNavRGB}, 1);
    height: 1rem;
  }
  &::-moz-range-thumb {
    background-color: ${({ theme }) => theme.colors.mainBg};
    height: 2rem;
    width: 1rem;
    border-radius: 0.5rem;
    outline: 1px solid ${({ theme }) => theme.colors.ctaEerieBlack};
  }
  &:focus::-moz-range-thumb,
  &:hover::-moz-range-thumb {
    outline: 1.5px solid ${({ theme }) => theme.colors.ctaEerieBlack};
    /* IE */
    &::-ms-fill-lower {
      background: rgba(${({ theme }) => theme.colors.activeNavRGB}, 0.45);
    }
    &::-ms-fill-upper {
      background: rgba(${({ theme }) => theme.colors.activeNavRGB}, 1);
    }
  }
`;
export default CustomSlider;
