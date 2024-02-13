import { Route, Routes } from 'react-router-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';

function App() {
	return (
		<>
			<Button appearence='big'>Кнопка</Button>
			<Button appearence='small'>Кнопка</Button>
			<Input placeholder='Email' />
			<div>
				<a href="/">Menu</a>
				<a href="/cart">Cart</a>
				<a href="*">Other</a>
			</div>
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
