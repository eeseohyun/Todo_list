import styles from "./Header.module.css";

const Header = () => {
	return (
		<header>
			<h1 className={styles.todoTitle}>
				TODOs (<mark className={styles.todoCount}>5</mark>)
			</h1>
		</header>
	);
};

export default Header;
