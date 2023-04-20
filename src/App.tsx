import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Tools from "./components/Tools";
import Divider from "./components/Divider";
import TodoList from "./components/TodoList";
import { useState } from "react";
import TodoListArea from "./components/TodoListArea";

export type TodoType = {
	id: number;
	todo: string;
	isChecked: boolean;
};

function App() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState<TodoType[]>([]);
	const handleTextChange = (todo: string) => {
		setTodo(todo);
	};
	const handleSubmit = () => {
		const newTodos = todos.concat({
			id: Date.now(),
			todo: todo,
			isChecked: true,
		});
		setTodos([...newTodos]);
		setTodo(""); //할일 등록 후, input에 빈 값이 되도록 초기화
	};
	return (
		<main className="App">
			<Header />
			<Input
				todo={todo}
				onTextChange={handleTextChange}
				onSubmit={handleSubmit}
			/>
			<TodoListArea todoCount={todos.length}>
				<Tools />
				<Divider />
				<TodoList todos={todos} />
			</TodoListArea>
		</main>
	);
}

export default App;
