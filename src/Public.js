import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Routes, Route } from 'react-router-dom';
import { PublicHome } from './pages/PublicHome/PublicHome';
export const Public = () => {
	return (
		<Routes>
			<Route path='/' element={<PublicHome />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='*' element={<h2>Error 404</h2>} />
		</Routes>
	);
};
