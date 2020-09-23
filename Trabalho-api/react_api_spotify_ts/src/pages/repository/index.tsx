import React from 'react';
import logoImg from '../../assets/logo.png';
import { Title, Form, Repositories } from './styles';

const Repository: React.FC = () => {
  return (
    <>
      <a href='/'>
      <img src={logoImg} alt='Spotify' />
      </a>
      <Form>
        <input placeholder = "Barra de Pesquisa" />
        <button type = "submit">Pesquisar</button>
      </Form>
      <Title><u>Informações:</u></Title>
      <Repositories>
        <a>
          <img src = "https://rlv.zcache.com.br/cartao_postal_ponto_de_interrogacao_preto-r6cc991a67e7c4ef98d7a2bf74709a5c2_vgbaq_8byvr_540.jpg"
          alt="Spotify"
          />
        <div>
          <strong>Sobre:</strong>
          <p>
          Spotify é um serviço de streaming de música, podcast e vídeo que foi lançado oficialmente em 7 de outubro de 2008. É o serviço de streaming mais popular e usado do mundo.
          Ele é desenvolvido pela startup Spotify AB em Estocolmo, Suécia.
          Ele fornece conteúdo protegido de conteúdo provido de restrição de gestão de direitos digitais de gravadoras e empresas de mídia.
          O Spotify é um serviço freemium; com recursos básicos sendo gratuitos com propagandas ou limitações, enquanto recursos adicionais, como qualidade de transmissão aprimorada e downloads de música, são oferecidos para assinaturas pagas.
          </p>
        </div>
        </a>

        <a>
          <img src = "https://e7.pngegg.com/pngimages/419/473/png-clipart-computer-icons-user-profile-login-user-heroes-sphere-thumbnail.png"
          alt="Spotify"
          />
        <div>
          <strong>Usuários:</strong>
          <p>
          Atualmente o spotify conta com 299 milhões de usuários no total.
          </p>
        </div>
        </a>

        <a>
          <img src = "https://img.favpng.com/3/19/4/computer-icons-scalable-vector-graphics-money-portable-network-graphics-png-favpng-9VQKX54ZZrEV1sWdQ5gfuFwaL.jpg"
          alt="Spotify"
          />
        <div>
          <strong>Assinantes Pagantes:</strong>
          <p>
          Spotify conta com 108 milhões de assinantes pagantes.
          </p>
        </div>
        </a>

        <a>
          <img src = "https://www.netclipart.com/pp/m/17-178781_headphone-clipart-music-note-iconos-de-musica-png.png"
          alt="Spotify"
          />
        <div>
          <strong>Músicas:</strong>
          <p>
          Fornece acesso a mais de 30 milhões de músicas.
          </p>
        </div>
        </a>

        <a href='/'>
        <p>&lt; Voltar</p>
        </a>
      </Repositories>
    </>
    )
};

export default Repository;
