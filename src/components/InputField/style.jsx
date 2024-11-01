import styled from 'styled-components';

export const InputStyle = styled.input`
  width: 100%;
  line-height: 1.5;
  padding: 1.5rem 1rem 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 4px;
  outline: none; 
  margin-bottom: 16px; /
  
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7); 
  }

  
  &:focus {
    border-color: rgba(255, 255, 255, 1); 
    background-color: rgba(0, 0, 0, 0.5); 
  }

 
  @media screen and (prefers-reduced-motion) {
    transition: none; 
  }

  min-height: 40px; 
  font-size: 1rem; 

 
  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.5); 
  }
`;

