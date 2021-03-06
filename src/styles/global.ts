import { createGlobalStyle } from 'styled-components';

// Global css
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    font: 14px 'Roboto', sans-serif !important;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  input, button {
    font: 14px 'Roboto', sans-serif !important;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
  
`;
