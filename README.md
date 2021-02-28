# &#10000; 개요

이번에 React와 Typescript를 공부하면서 node까지는 쓰지않고 React만으로 메모웹 만들어보기 <br />
Reducer를 임시저장소로 사용해서 만들기

# &#10004; 0216
* 메모리스트 컴포넌트안에 메모 컴포넌트 리스팅<br />
* 일단 메모 컴포넌트를 누르면 alert띄우기<br />
* 메모 컴포넌트와 리스트 컴포넌트 스타일링 (조금 더 수정해야함.)<br /><br />

<div align=center>

| 컴포넌트 이름 | 내용 |
|---|:---:|
| `App` | MemoList 렌더링 |
| `MemoList` | MemoButton 렌더링 |
| `MemoButton` | 메모창 띄우는 버튼 |

</div>

# &#10004; 0220
* Memo 타입과 Memo를 담는 배열인 Memos 타입을 만들어 메모에 사용되는 객체들을 useState으로 관리(나중에 useReducer로 바꿀꺼임)<br />
* MemoButton을 누르게 되면 Memo에 들어있는 id, title, description을 콘솔에 출력하도록 함.<br />
* MemoButton을 생성하는 버튼을 만들었음.(AddMemoButton 컴포넌트)<br />
* 메모리스트는 App에서 받아오는 Memo 수 만큼 MemoButton을 생성함.<br /><br />

### 메모 객체 구조

```typescript
type Memos = Memo[];

type Memo = {
  id: number,
  title: string,
  description: string
};
```

### 컴포넌트 구조
```sh
├─App(memos: Memos)
│  ├─AddMemoButton
│  └─MemoList(props: { memos: Memos })
│       └─MemoButton(props: { id, title, description }: Memo)
```

# &#10004; 0224
* MemoButton을 누르면 모달형식으로 메모 내용을 띄워줌. 현재는 input 태그로 내용을 출력하기만 하는데 나중에 수정할 수 있도록 할 것임.

<div align=center>

| 컴포넌트 이름 | 내용 |
|---|:---:|
| `App` | MemoList 렌더링 |
| `AddMemoButton` | MemoButton 추가하는 버튼 |
| `MemoList` | MemoButton 렌더링 |
| `MemoButton` | 메모창 띄우는 버튼 |
| `MemoContent` | 메모 내용(모달 형식) |

</div>

### 컴포넌트 구조
```sh
├─App(memos: Memos)
│  ├─AddMemoButton
│  └─MemoList(props: { memos: Memos })
│       └─MemoButton(props: { id, title, description }: Memo)
│            └─MemoContent(props: { visible: boolean }, { id, title, description }: Memo)
```


# &#10004; 0228
* 현재 useState로 메모 내용들이 저장되어 있고 해당 내용을 수정할 수 있게 했음.
* 그리고 새로운 useState 변수인 nextId를 통해 각 메모의 고유값을 할당해줌.
* modifyMemo를 통해 메모 모달에서 해당 내용을 수정하면 바로바로 setMemo로 업데이트를 해주는 방식임.

![0228](https://user-images.githubusercontent.com/20867824/109421880-868d1d00-7a1c-11eb-962a-489ef4ab7d70.gif)