import styled from 'styled-components';

export const Input = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  height: 30px;
`;

export const Button = styled.button`
  color: #fff;
  background-color: blue;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-color: transparent;
  transition-property: red;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #188ce8;`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
`;
