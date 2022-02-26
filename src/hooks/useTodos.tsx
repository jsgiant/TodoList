import React, { useContext, useEffect, useState } from "react";

import { TodosContext } from "../contexts/TodosContext";
import { TodoType } from "../types";

export const useTodos = () => {
	const context = useContext(TodosContext);

	if (!context) throw new Error("Expected to be wrapped in a TodosProvider");

	return context;
};

export const TodosProvider = (props: any) => {
	const todosMap = new Map<number, TodoType>();
	const [todos, setTodos] = useState(todosMap);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string>("");
	const [isFailed, setIsFailed] = useState(false);

	const getTodos = async () => {
		setIsLoading(true);
		fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
			if (!response.ok) {
				setIsFailed(true);
				setError(response.statusText);
			} else {
				response.json().then((data) => {
					data.forEach((todo: TodoType) => {
						todos.set(todo.id, todo);
					});
					setTodos(todos);
					setIsLoading(false);
				});
			}
		});
	};

	const deleteTodo = (id: number) => {
		todos.delete(id);
		setTodos(new Map(todos));
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<TodosContext.Provider
			value={{
				todos: Array.from(todos.values()),
				deleteTodo: deleteTodo,
				isFailure: isFailed,
				isLoading: isLoading,
				error: error,
			}}
		>
			{props.children}
		</TodosContext.Provider>
	);
};
