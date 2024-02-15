import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent } from 'react';

export function Login() {
	const submit = (e: FormEvent) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<div className={styles['login']}>
			<Header>Вход</Header>
			<form className={styles['form']} onSubmit={submit}>
				<div className={styles['field']}>
					<label htmlFor="email">Ваш email</label>
					<Input id="email" name="email" placeholder="Email" />
				</div>
				<div className={styles['field']}>
					<label htmlFor="password">Пароль</label>
					<Input id="password" name="password" type="password" placeholder="Password" />
				</div>
				<Button appearence="big">Вход</Button>
			</form>
			<div className={styles['links']}>
				<div>Нет аккаунт?</div>
				<Link to="/auth/register">Зарегистрироваться</Link>
			</div>
		</div>
	);
}