import React from 'react';
import MemoButton from './MemoButton';
import styled from 'styled-components';

const StyledMemoList = styled.div`
    height: 768px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 100px;
`;

const MemoList = () => (
    <StyledMemoList>
        <MemoButton />
        <MemoButton />
        <MemoButton />
        <MemoButton />
        <MemoButton />
        <MemoButton />
        <MemoButton />
        <MemoButton />
    </StyledMemoList>
);

export default MemoList;