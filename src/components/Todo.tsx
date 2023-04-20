import styles from "./Todo.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";

interface TodoProps {
	todo: string;
	isChecked: boolean;
}
const Todo = (props: TodoProps) => {
	return (
		<li className={styles.container}>
			<AiOutlineCheckCircle
				className={props.isChecked ? styles.check : styles.nocheck}
			/>
			<span className={styles.todo}>{props.todo}</span>
			<AiOutlineMinusCircle className={styles.remove} />
		</li>
	);
};

export default Todo;
