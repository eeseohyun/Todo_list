import styles from "./TodoList.module.css";
import Todo from "./Todo";
import { TodoType } from "../App";

interface TodoListProps {
	todos: TodoType[];
}
const TodoList = (props: TodoListProps) => {
	return (
		<>
			<section>
				<ol className={styles.olContainer}>
					{props.todos.map((todo) => (
						<Todo key={todo.id} todo={todo.todo} isChecked={todo.isChecked} />
					))}
				</ol>
			</section>
		</>
	);
};

export default TodoList;
