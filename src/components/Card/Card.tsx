import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { CardProps } from './Card.props';

function Card(props: CardProps) {
	console.log(props.image);

	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{ backgroundImage: `url('${props.image}')`}}>
					<div className={styles['price']}>
						{props.price}
						<span className={styles['currency']}>р</span>
					</div>
					<button className={styles['add-to-cart']}>
						<img src="./cart-button.svg" alt="cart button" />
					</button>
					<div className={styles['rating']}>
						{props.rating}
						<img src="./star.svg" alt="star icon" />
					</div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}>{props.title}</div>
					<div className={styles['description']}>{props.description}</div>
				</div>
			</div>
		</Link>
	);
}

export default Card;