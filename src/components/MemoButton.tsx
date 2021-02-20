import React from 'react';
import styled from 'styled-components';
import { GrDatabase } from 'react-icons/gr';
import { Memo } from '../App';

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

function onOpenMemo(id: number, title: string, description: string) {
    console.log(id + " " + title + " " + description);
}

const MemoButton = ({ id, title, description }: Memo) => (
    <StyledButton onClick={() => onOpenMemo(id, title, description)}>
        <GrDatabase />
    </StyledButton>
);

export default MemoButton;