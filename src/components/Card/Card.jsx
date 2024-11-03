import styles from '../Card/Card.module.css';

function Card(props) {
	return (
		<div className={styles.card}>
			<img
				className={styles.cardImage}
				src='https://placehold.co/150'
				alt='profile picture'></img>
			<h2 className={styles.cardTitle}>{props.name}</h2>
			<p className={styles.cardText}>Email: {props.email}</p>
			<p className={styles.cardMsg}>Message: {props.msg}</p>
		</div>
	);
}

export default Card;
