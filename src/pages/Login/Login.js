import axios from 'axios';
import { useRef } from 'react';
import { useAuth } from '../../Hook/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import LoginBack from '../../assets/images/login-img.svg';
import './Login.scss';

export const Login = () => {
	const elEmail = useRef();
	const elPassword = useRef();
	const navigate = useNavigate();
	const { setToken } = useAuth();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		axios
			.post('https://book-service-layer.herokuapp.com/user/login', {
				email: elEmail.current.value,
				password: elPassword.current.value,
			})
			.then(function (response) {
				console.log(response.data);
				if (response.data) {
					setToken(response.data);
					navigate('/');
				}
			})
			.catch(function (err) {
				console.log(err);
			});
	};

	return (
		<div className='login'>
			<div className='login-back'>
				<img src={LoginBack} alt='login' />
			</div>
			<div className='login-main'>
				<h2 className='login-title'>Sign in</h2>
				<div className='login-link-box'>
					<span className='login-span'>
						Do not you have an account?{' '}
					</span>{' '}
					<Link className='login-link' to='/register'>
						Sign up
					</Link>
				</div>
				<form onSubmit={handleSubmit} className='login-form'>
					<input
						type='email'
						className=' form-input'
						id='exampleInputPassword1'
						ref={elEmail}
						placeholder='Enter email...'
					/>

					<input
						type='password'
						className='form-input'
						id='exampleInputPassword1'
						ref={elPassword}
						placeholder='Enter password...'
					/>

					<button type='submit' className='login-submit'>
						Next step
					</button>
				</form>
			</div>
		</div>
	);
};
