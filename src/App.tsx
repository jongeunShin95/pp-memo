import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MemoList from './components/MemoList';
import { GrAddCircle } from 'react-icons/gr';
import { useMemoDispatch, useMemoNextId } from './MemoContext';

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
  const dispatch = useMemoDispatch();
  const nextId = useMemoNextId();

  const addMemo = () => {
    dispatch({ type: 'ADD_MEMO', id: nextId.current });
    nextId.current += 1;
  }

  return(
    <>
      <GlobalStyle />
      <MemoList />
      <AddMemoButton onClick={addMemo}>
            <GrAddCircle />
      </AddMemoButton>
    </>
  );
}

export default App;
