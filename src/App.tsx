import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MemoList from './components/MemoList';
import { GrAddCircle } from 'react-icons/gr';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const AddMemoButton = styled.div`
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    background: #B3E5E5;

    height: 2.25rem;
    width: 100%;
    font-size: 1rem;

    align-items: center;
    justify-content: center;

    margin-right: 10px;

    &:hover {
        background: #32BEBB;
    }
`;

export type Memos = Memo[];

export type Memo = {
  id: number,
  title: string,
  description: string
};

const App = () => {
  const [memos, setMemo] = useState<Memos>([
    {
      id: 1,
      title: 'TITLE1',
      description: "DESCRIPTION1"
    },
    {
      id: 2,
      title: 'TITLE2',
      description: "DESCRIPTION2"
    },
  ] as Memos);

  const addMemo = () => {
    const newMemos: Memos = [...memos, { id: 3, title: "TITLE3", description: "DESCRIPTION" }];
    setMemo(newMemos);
  }

  return(
    <>
      <GlobalStyle />
      <MemoList memos={memos} />
      <AddMemoButton onClick={addMemo}>
            <GrAddCircle />
      </AddMemoButton>
    </>
  );
}

export default App;
