import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  background-image: url('/path/to/netflix-background.jpg');
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.6);

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 600px) {
    background-color: black;
    background-image: none;
  }
`;

export const ContentForms = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 40px;
  border-radius: 8px;
  width: 90%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 10px; 
  height: auto;
  margin: auto;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Separator = styled.div`
  margin: 15px 0;
  font-size: 14px;
  color: #ccc;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  input {
    margin-right: 8px;
  }

  label {
    font-size: 14px;
    color: #ccc;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

export const LinkText = styled.a`
  color: #ccc;
  font-size: 14px;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;
