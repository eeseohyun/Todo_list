import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Tools from "./components/Tools";
import Divider from "./components/Divider";
import TodoList from "./components/TodoList";
import { useState } from "react";

type TodoType = {
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
		console.log("submit");
	};
	return (
		<main className="App">
			<Header />
			<Input
				todo={todo}
				onTextChange={handleTextChange}
				onSubmit={handleSubmit}
			/>
			<Tools />
			<Divider />
			<TodoList />
		</main>
	);
}

export default App;
