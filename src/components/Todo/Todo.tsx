import { MdDelete } from "react-icons/md";

import "./../../styles/todo.css";
export const Todo = () => {
  return (
    <li className="todo-item">
      <p className="todo-text"> Learn React </p>
      <MdDelete className="delete-icon" />
    </li>
  );
};
