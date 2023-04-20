import styles from "./Tools.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

const Tools = () => {
	return (
		<section className={styles.container}>
			<button className={styles.complete}>
				<AiOutlineCheckCircle className={styles.checkAll} />
				전체완료
			</button>
			<button className={styles.delete}>
				<FiTrash2 className={styles.trash} />
				전체삭제
			</button>
		</section>
	);
};

export default Tools;
