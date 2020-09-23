import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

img {
  width: 240px;
  border-block: antialiased;
}

body {
  background: #000000;
  -webkit-font-smoothing: antialiased;

body, input, button {
  font: 16px Helvetica;
}

#root {
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px 20px;
}

button {
  cursor: pointer;
}
}
`
