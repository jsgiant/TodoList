import TodoList from "./components/TodoList";
import { TodosProvider } from "./hooks/useTodos";

function App() {
	return (
		<TodosProvider>
			<TodoList />
		</TodosProvider>
	);
}

export default App;
