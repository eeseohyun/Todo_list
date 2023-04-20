import { ChangeEvent, FormEvent } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./Input.module.css";

interface InputProps {
	todo: string;
	onTextChange: (todo: string) => void;
	onSubmit: () => void;
}

const Input = (props: InputProps) => {
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		props.onTextChange(event.target.value);
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault(); //새로고침방지
		props.onSubmit();
	};
	return (
		<section className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					className={styles.input}
					placeholder="오늘의 할 일"
					value={props.todo}
					onChange={handleInputChange}
				></input>
				<button type="submit" className={styles.enter}>
					<AiOutlinePlus />
				</button>
			</form>
		</section>
	);
};

export default Input;
