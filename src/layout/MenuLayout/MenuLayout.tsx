import { NavLink, Outlet } from 'react-router-dom';
import styles from './MenuLayout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

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
					<NavLink to='/' className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/menu.svg" alt="menu icon" />
						Menu
					</NavLink>
					<NavLink to='/cart' className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/cart.svg" alt="cart icon" />
						Cart
					</NavLink>
				</div>
				<Button className={styles['exit']}>
					<img src="/exit.svg" alt="exit icon" />
					Exit
				</Button>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}