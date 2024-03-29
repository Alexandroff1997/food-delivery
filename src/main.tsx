import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import { MenuLayout } from './layout/MenuLayout/MenuLayout';
import { Product } from './pages/Product/Product';
import { PREFIX } from './helpers/api';
import axios from 'axios';
import { AuthLayout } from './layout/AuthLayout/AuthLayout';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { RequireAuth } from './helpers/RequireAuth';
import { Provider } from 'react-redux';
import { store } from './store/store';

// eslint-disable-next-line react-refresh/only-export-components
const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <RequireAuth><MenuLayout /></RequireAuth>,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<>Загрузка...</>}><Menu /></Suspense>
			},
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Ошибка загрузки</>,
				loader: async ({ params }) => {
					return defer({
						data: await axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
					});
				}
			}
		]
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			}, 
			{
				path: 'register',
				element: <Register />
			}
		]
	},
	{
		path: '*'
	}
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
