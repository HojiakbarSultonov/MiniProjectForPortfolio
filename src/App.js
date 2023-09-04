import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login, Main, Register } from './pages';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
