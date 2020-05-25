import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Story from './pages/Story';
import ErrorBoundary from './components/ErrorBoundary';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    @media (max-width: 768px){
      font-size: 50%;
    }
  }
  body{
    background: #232323;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color: #fff;
    font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', メイリオ,
    Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.8;
    text-size-adjust: 100%;
    }

    img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  h1{
    font-size: 3.2rem;
  }
  h2{
    font-size: 2rem;
  }
  p{
    color: #8e8e8e
  }
  a{
  text-decoration: none;
  color: #ddd;
  }

  @media (max-width: 768px) {
    html{
      font-size: 50%;
    }
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ErrorBoundary>
        <Story />
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
