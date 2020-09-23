import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 40px;
  color: #fff;
  font-family: Helvetica;

  margin-top: 100px;
  margin-left: 20px;

`;

export const Form = styled.form`
  margin: 40px top;
  margin-left: 300px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 40px;
    padding: 0 30px;
    border: 0;
    border-radius: 20px 0px 0px 20px;
    background: #181818;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }

  button {
    width: 120px;
    height: 40px;
    border: 0;
    border-radius: 0px 20px 20px 0px;
    background: #1DB954;
    font-weight: bold;
    transition: background-color 02.s;

    &:hover {
      background: ${shade(0.5, '#1DB954')}
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 60px;
  max-width: 500px;
  margin-left: 20px;

  a {
    background: #181818;
    border-radius: 10px;
    align-items: center;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items:center;
    transition: 0.2s;

    & + a {
      margin-top: 20px;
      display: inline-flex;
    }

    &:hover {
      transform: translateY(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 30%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #1DB954;
      }
      p {
        font-size: 18px;
        font-family: Arial;
        color: #fff;
        margin-top: 4px;
        margin-left: 1px
      }
    }
  }
`
