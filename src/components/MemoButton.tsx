import React from 'react';
import styled from 'styled-components';
import { GrDatabase } from 'react-icons/gr';

const StyledButton = styled.button`
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    background: #B3E5E5;

    height: 2.25rem;
    width: 3.25rem;
    font-size: 1rem;

    align-items: center;
    justify-content: center;

    margin-right: 10px;

    &:hover {
        background: #32BEBB;
    }

`;

function onOpenMemo() {
    alert("test");
}

const MemoButton = () => (
    <StyledButton onClick={onOpenMemo}>
        <GrDatabase />
    </StyledButton>
);

export default MemoButton;