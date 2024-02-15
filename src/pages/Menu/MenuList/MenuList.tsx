import Card from '../../../components/Card/Card';
import { MenuListProps } from './MenuList.props';

export function MenuList({ products }: MenuListProps) {
	return products.map(el => (
		<Card 
			key={el.id}
			id={el.id}
			title={el.name}
			description={el.ingredients.join(', ')}
			rating={el.rating}
			price={el.price}
			image={el.image}
		/>
	));
}