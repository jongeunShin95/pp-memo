import React from 'react';
import styled from 'styled-components';
import { GrFormClose } from "react-icons/gr";

const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;

const ContentBlock = styled.div`
    width: 450px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;
    h3 {
        margin: 0;
        font-size: 1.5rem;
    }

    input {
        border: none;
        font-size: 1.125rem;
        margin-bottom: 20px;
    }

    input: focus {
        outline: 2px solid rgba(179, 229, 229, 0.4);
    }
`;

const CancelButton = styled.div`
    font-size: 40px;
    display: flex;
    justify-content: flex-end;
`;

type PropsType = {
    visible: boolean;
    id: number;
    title: string;
    description: string;
    onCloseMemo: () => void;
    modifyMemo: (id: number, name: string, value: string) => void;
};

const MemoContent = ({ visible, id, title, description, onCloseMemo, modifyMemo }: PropsType) => {

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        modifyMemo(id, name, value);
    }

    if (!visible) return null;
    return (
        <DarkBackground>
            <ContentBlock>
                <CancelButton onClick={onCloseMemo}>
                    <GrFormClose />
                </CancelButton>
                <h3>제목</h3>
                <input name="title" value={title} onChange={onHandleChange} />
                <h3>내용</h3>
                <input name="description" value={description} onChange={onHandleChange} />
            </ContentBlock>
        </DarkBackground>
    )
}

export default MemoContent;