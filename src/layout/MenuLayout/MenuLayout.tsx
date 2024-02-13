import { Link, Outlet } from 'react-router-dom';
import styles from './MenuLayout.module.css';
import Button from '../../components/Button/Button';

export function MenuLayout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img src="/avatar.svg" className={styles['avatar']} alt="user avatar" />
					<div className={styles['name']}>
						User
					</div>
					<div className={styles['email']}>email@mail.ru</div>
				</div>
				<div className={styles['menu']}>
					<Link to='/' className={styles['link']}>
						<img src="/menu.svg" alt="menu icon" />
						Menu
					</Link>
					<Link to='/cart' className={styles['link']}>
						<img src="/cart.svg" alt="cart icon" />
						Cart
					</Link>
				</div>
				<Button className={styles['exit']}>
					<img src="/exit.svg" alt="exit icon" />
					Exit
				</Button>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
}