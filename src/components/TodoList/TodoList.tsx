import { useTodos } from "../../hooks/useTodos";
import { Todo } from "../Todo/Todo";
import "./../../styles/todoList.css";
export const TodoList = () => {
	const { todos, isLoading, isFailure, error } = useTodos();
	return (
		<div className='todo-list-container'>
			<h1 className='todo-list-heading'>Todo List</h1>
			<ul className='todo-list'>
				{isLoading ? (
					<p>Loading....</p>
				) : isFailure ? (
					<p>{error}</p>
				) : (
					todos.map((todo) => <Todo key={todo.id} todo={todo} />)
				)}
			</ul>
		</div>
	);
};
