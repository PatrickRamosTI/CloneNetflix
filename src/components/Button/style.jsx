import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 250ms;
  transition-property: background-color, border-color;
  transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
  min-height: 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ primary }) => (primary ? "red" : "transparent")};
  color: ${({ primary }) => (primary ? "white" : "#ece4e4")};
  border: ${({ primary }) => (primary ? "none" : "1px solid #e6d9d9")};

  opacity: ${({ transparent }) => (transparent ? 0.5 : 1)};

  @media screen and (prefers-reduced-motion) {
    transition: none;
  }

  &:hover {
    opacity: 0.9;
  }
`;
