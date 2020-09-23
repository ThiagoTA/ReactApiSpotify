import React from 'react';
import logoImg from '../../assets/logo.png';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
  <>
    <img src={logoImg} alt='Spotify' />
    <Form>
      <input placeholder = "Barra de Pesquisa" />
      <button type = "submit">Pesquisar</button>
    </Form>
    <Title><u>Principal:</u></Title>
    <Repositories>

      <a href = "/repository">
        <img src = "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-brands-logo-34.png"
        alt="Spotify"
        />
      <div>
        <strong>Spotify informações</strong>
        <p>
          Clique para obter mais informações...
        </p>
      </div>
      </a>

      <a href = "http://localhost:8888">
        <img src = "https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png"
        alt="Usuário"
        />
      <div>
        <strong>Logar com o Spotify</strong>
        <p>
          Clique aqui para logar com a sua conta.
        </p>

      </div>
      </a>
      
    </Repositories>
  </>
  )
};

export default Dashboard;
