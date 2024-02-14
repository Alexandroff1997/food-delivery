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
		</>
	);
}