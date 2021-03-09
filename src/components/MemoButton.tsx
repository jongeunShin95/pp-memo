import React, { useState } from 'react';
import styled from 'styled-components';
import { GrDatabase } from 'react-icons/gr';
import MemoContent from './MemoContent';

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

type PropsType = {
    id: number;
    title: string;
    description: string;
}

const MemoButton = ({ id, title, description }: PropsType) => {
    const [visible, setVisible] = useState<boolean>(false);

    function onOpenMemo() {
        setVisible(true);
    }

    function onCloseMemo() {
        setVisible(false);
    }

    return (
        <>
            <StyledButton onClick={() => onOpenMemo()}>
                <GrDatabase />
            </StyledButton>
            <MemoContent visible={visible} id={id} title={title} description={description} onCloseMemo={onCloseMemo} />
        </>
    );
};

export default MemoButton;