import { MdDelete } from "react-icons/md";
import { useTodos } from "../../hooks/useTodos";
import { TodoType } from "../../types";
import "./../../styles/todo.css";

export const Todo = (props: { todo: TodoType }) => {
	const { deleteTodo } = useTodos();
	const { id, title } = props.todo;

	const onDeleteTodo = () => deleteTodo(id);

	return (
		<li className='todo-item' key={id}>
			<p className='todo-text'> {title} </p>
			<MdDelete className='delete-icon' onClick={onDeleteTodo} />
		</li>
	);
};
