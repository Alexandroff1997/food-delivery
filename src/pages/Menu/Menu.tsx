import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/api';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			await new Promise<void>((res) => {
				setTimeout(() => {
					res();
				}, 2000);
			});
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return (
		<>
			<div className={styles['head']}>
				<Header>Меню</Header>
				<Search placeholder='Введите блюдо или состав' />
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && <MenuList products={products} />}
				{isLoading && <>Идет загрузка...</>}
			</div>
		</>
	);
}

export default Menu;