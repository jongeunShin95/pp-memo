import React, { useReducer, createContext, Dispatch, useContext, useRef } from 'react';

export type Memos = Memo[];

export type Memo = {
  id: number,
  title: string,
  description: string
};



type Action = 
    | { type: 'ADD_MEMO'; id: number; }
    | { type: 'MODIFY_MEMO'; id: number; name: string; value: string; };

type MemoDispatch = Dispatch<Action>;

const initialMemos: Memos = [
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
];

function memoReducer(state: Memos, action: Action): Memos {
    switch (action.type) {
        case 'ADD_MEMO':
            return [
                ...state,
                { id: action.id, title: `TITLE${action.id}`, description: `DESCRIPTION${action.id}` }
            ];
        case 'MODIFY_MEMO':
            return state.map(memo =>
                    memo.id === action.id ? { ...memo, [action.name]: action.value } : memo
                );
        default:
            throw new Error('Unhandled action');
    }
}

const MemoStateContext = createContext<Memos | null>(null);
const MemoDispatchContext = createContext<MemoDispatch | null>(null);
const MemoNextIdContext = createContext<React.MutableRefObject<number> | null>(null);

export function MemoProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(memoReducer, initialMemos);
    const nextId = useRef<number>(3);
    
    return (
        <MemoStateContext.Provider value={state}>
            <MemoDispatchContext.Provider value={dispatch}>
                <MemoNextIdContext.Provider value={nextId}>
                    {children}
                </MemoNextIdContext.Provider>
            </MemoDispatchContext.Provider>
        </MemoStateContext.Provider>
    )
}

export function useMemoState() {
    const state = useContext(MemoStateContext);
    if (!state) throw new Error('Cannot find MemoProvider');
    return state;
}

export function useMemoDispatch() {
    const dispatch = useContext(MemoDispatchContext);
    if (!dispatch) throw new Error('Cannot find MemoProvider');
    return dispatch;
}

export function useMemoNextId() {
    const nextId = useContext(MemoNextIdContext);
    if (!nextId) throw new Error('Cannot find MemoProvider');
    return nextId;
}