import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MemoList from './components/MemoList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const App = () => {
  return(
    <>
      <GlobalStyle />
      <MemoList />
    </>
  );
}

export default App;
