import { createContext } from "react";
import { TodosContextType } from "../types";

export const TodosContext = createContext<TodosContextType>({
	todos: [],
	deleteTodo: () => {},
	isLoading: false,
	isFailure: false,
	error: "",
} as TodosContextType);
