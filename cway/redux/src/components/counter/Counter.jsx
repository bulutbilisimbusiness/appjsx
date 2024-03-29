import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";
import { clear, decrement, increment } from "../../store/counterReducer";

const Counter = () => {
	//const count = useSelector((state) => state.counter.count);
	const { count } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div className="app">
			<h2 className="counter-header">Counter With Redux</h2>
			<h1>counter: {count}</h1>
			<div>
				<button
					className="counter-button positive"
					onClick={() => dispatch(increment())}
				>
					increase
				</button>
				<button
					className="counter-button zero"
					onClick={() => dispatch(clear())}
				>
					reset
				</button>
				<button
					className="counter-button negative"
					onClick={() => dispatch(decrement())}
				>
					decrease
				</button>
			</div>
		</div>
	);
};

export default Counter;
