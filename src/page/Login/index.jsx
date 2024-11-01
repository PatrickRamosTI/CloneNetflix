
import React, { useState } from 'react';
import { ImgLogin } from '../../components/ImgLogin'; 
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { Container, Title, ContentForms, Separator, RememberMeContainer, LinkText } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  const handleCodigo = () => {
    alert('Código de acesso');
  };

  return (
    <ImgLogin>
      <Container>
        <Header />
        <ContentForms>
          <Title>Entrar</Title>

          <InputField
            propsplaceholder="Email ou um número de celular"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            propsplaceholder="Senha"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button title="Entrar" handleFunction={handleLogin} primary />
          <Separator>OU</Separator>
          <Button title="Usar um código de acesso" handleFunction={handleCodigo} transparent />

          <LinkText href="#">Esqueceu a senha?</LinkText>
          <RememberMeContainer>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Lembre-se de mim</label>
          </RememberMeContainer>
        </ContentForms>
        <Footer />
      </Container>
    </ImgLogin>
  );
};
