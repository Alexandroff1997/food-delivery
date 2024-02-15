import Card from '../../../components/Card/Card';
import { MenuListProps } from './MenuList.props';
import styles from './MenuList.module.css';

export function MenuList({ products }: MenuListProps) {
	return (
		<div className={styles['wrapper']}>
			{products.map(el => (
				<Card 
					key={el.id}
					id={el.id}
					title={el.name}
					description={el.ingredients.join(', ')}
					rating={el.rating}
					price={el.price}
					image={el.image}
				/>
			))}
		</div>
	);
}