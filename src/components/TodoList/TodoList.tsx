import { Todo } from "../Todo/Todo";
import "./../../styles/todoList.css";
export const TodoList = () => {
  return (
    <div className="todo-list-container">
      <h1 className="todo-list-heading">Todo List</h1>
      <ul className="todo-list">
        <Todo />
      </ul>
    </div>
  );
};
