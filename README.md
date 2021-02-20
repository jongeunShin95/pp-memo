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
* MemoButton을을 누르게 되면 Memo에 들어있는 id, title, description을 콘솔에 출력하도록 함.<br />
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
