import { useReducer } from 'react';

//순서1 - 전역데이터를 변경해주는 규칙을 가지고 있는 변형자함수 생성

const reducer = (state, action) => {
	// if (action.type === 'minus') return state - action.payload;
	// if (action.type === 'plus') return state + action.payload;
	// else return state;
	switch (action.type) {
		case 'minus':
			return state - action.payload;
		case 'plus':
			return state + action.payload;
		default:
			return state;
	}
};

function App() {
	//순서2 - 변형자함수와 초기값을 인수로 전달받아서 전역 State와 전달자함수를 생성해주는 useReducer 호출
	// const [Num, setNum] = useState(0);
	//const [초기값으로 만들어진 전역 state, 해당 state변경하기위한 action객체 전달함수] = useReducer(변형함수, 초기값)
	const [Num, dispatch] = useReducer(reducer, 0);

	return (
		<main>
			<h1>{Num}</h1>
			{/* 순서3 - 이벤트 발생시 useReducer로 활성화 시킨 dispatch 함수로 액견객체 리듀서에 전달 */}
			<button
				onClick={() => {
					dispatch({ type: 'minus', payload: 1 });
				}}
			>
				minus
			</button>
			<button
				onClick={() => {
					dispatch({ type: 'plus', payload: 1 });
				}}
			>
				plus
			</button>
		</main>
	);
}

export default App;
