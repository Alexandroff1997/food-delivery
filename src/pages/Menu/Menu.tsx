import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

export function Menu() {
	return (
		<>
			<div className={styles['head']}>
				<Header>Меню</Header>
				<Search placeholder='Введите блюдо или состав' />
			</div>
			<div>
				<Card 
					id={1}
					title='Наслаждение'
					description='Салями, руккола, помидоры, оливки'
					rating={4.5}
					price={300}
					image='/test.svg'
				/>
			</div>
		</>
	);
}