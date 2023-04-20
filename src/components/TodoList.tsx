import styles from "./TodoList.module.css";
import Todo from "./Todo";

const TodoList = () => {
	const list = ["React", "TypeScript", "JavaScript", "HTML", "CSS"];
	return (
		<section>
			<ol className={styles.olContainer}>
				{list.map((el, idx) => (
					<Todo key={`${el}_${idx}`} todo={el} />
				))}
			</ol>
		</section>
	);
};

export default TodoList;
