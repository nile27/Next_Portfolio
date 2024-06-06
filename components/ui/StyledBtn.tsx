import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: inherit;
`;

// Style for Background
const Background = styled.div<{ isActive?: boolean }>`
  border-radius: 16px;
  border: 1px solid #1a1a1a;
  background: #7f5af0;
  mix-blend-mode: luminosity;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      background: #fffffe;
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    `}
`;

// Style for Menu Icon
const MenuIcon = styled.div<{ isActive?: boolean }>`
  width: 28px;
  height: 28px;
  padding: 3px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  span {
    cursor: pointer;
    width: 100%;
    height: 0.125rem;
    border-radius: 0.125rem;
    background-color: #fffffe;
    box-shadow: 0 0.5px 2px 0 hsla(0, 0%, 0%, 0.2);
    transition: transform 0.4s, background-color 0.4s, width 0.4s, opacity 0.4s;
  }

  span:nth-child(2) {
    width: 60%;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      span:nth-child(1) {
        background-color: rgb(255, 59, 48);
        transform: translateY(7.5px) rotate(-45deg);
      }

      span:nth-child(2) {
        width: 0;
        opacity: 0;
      }

      span:nth-child(3) {
        background-color: rgb(255, 59, 48);
        transform: translateY(-7.5px) rotate(45deg);
      }
    `}
`;

export { Button, Background, MenuIcon };
