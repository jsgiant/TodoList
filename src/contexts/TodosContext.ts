import { createContext } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
interface TodosContextType {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  isLoading: boolean;

  isFailure: boolean;

  error: string;
}

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  deleteTodo: () => {},
  isLoading: false,
  isFailure: false,
  error: "",
} as TodosContextType);
