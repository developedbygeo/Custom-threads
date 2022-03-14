import styled from 'styled-components';

const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightText};
  outline: 0;
  color: ${({ theme }) => theme.colors.ctaEerieBlack};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    cursor: text;
  }

  & ~ label {
    position: absolute;
    bottom: 5px;
    display: block;
    letter-spacing: 0.15rem;
    transition: all 0.2s ease-in-out;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.ctaDavysGray};
  }

  &:focus {
    & ~ label {
      position: absolute;
      transform: translateY(-25px);
      display: block;
      transition: all 0.2s ease-in-out;
      color: ${({ theme }) => theme.colors.activeNav};
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 2px;
    border-image: linear-gradient(to right, #dd6636, #de8f35);
    border-width: 2px;
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
  &:valid {
    font-weight: 700;
    & ~ label {
      transform: translateY(-25px);
    }
  }
`;

export default StyledInput;
