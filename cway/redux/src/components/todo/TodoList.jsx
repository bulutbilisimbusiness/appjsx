import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
const TodoList = () => {
	const { todoList } = useSelector((state) => state.todo);
	const handleClearList = () => {
		// eslint-disable-next-line no-undef
		dispatch(clearTodo());
	};

	return (
		<div>
			<div>
				{todoList?.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</div>
			<div className="clear-wrapper">
				<button onClick={handleClearList} className="clear-button">
					Clear
				</button>
			</div>
		</div>
	);
};

export default TodoList;
