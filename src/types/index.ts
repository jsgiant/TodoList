export type TodoType = {
	id: number;
	title: string;
	completed: boolean;
	userId: number;
};

export interface TodosContextType {
	todos: TodoType[];
	deleteTodo: (id: number) => void;
	isLoading: boolean;

	isFailure: boolean;

	error: string;
}
