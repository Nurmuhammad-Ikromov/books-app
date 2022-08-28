import axios from 'axios';
import { useRef } from 'react';
import { useAuth } from '../../Hook/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import RegisterBack from '../../assets/images/register-img.svg';
// import './Login.scss';

export const Register = () => {
	const first_name = useRef();
	const last_name = useRef();
	const phone = useRef();
	const elEmail = useRef();
	const elPassword = useRef();
	const navigate = useNavigate();
	const { setToken } = useAuth();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		axios
			.post('https://book-service-layer.herokuapp.com/user/register', {
				first_name: first_name.current.value,
				last_name: last_name.current.value,
				phone: phone.current.value,
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
				<img src={RegisterBack} alt='register background' />
			</div>
			<div className='login-main'>
				<h2 className='login-title'>Sign up</h2>
				<div className='login-link-box'>
					<span className='login-span'>Already have an account?</span>{' '}
					<Link className='login-link' to='/login'>
						Sign in
					</Link>
				</div>
				<form onSubmit={handleSubmit} className='login-form'>
					<input
						type='text'
						className='form-input'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						ref={first_name}
						placeholder='First name'
					/>

					<input
						type='text'
						className='form-input'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						ref={last_name}
						placeholder='Last name'
					/>

					<input
						type='number'
						className='form-input'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						ref={phone}
						placeholder='Phone'
					/>

					<input
						type='email'
						className='form-input'
						id='exampleInputPassword1'
						ref={elEmail}
						placeholder='Email'
					/>

					<input
						type='password'
						className='form-input'
						id='exampleInputPassword1'
						ref={elPassword}
						placeholder='Password'
					/>

					<button type='submit' className='login-submit'>
						Next step
					</button>
				</form>
			</div>
		</div>
	);
};
