import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/site-logo.svg';
import { useAuth } from '../../Hook/useAuth';
import './Header.scss';
import User from '../../assets/images/user.png';
import { useMode } from '../../Hook/useMode';

export const Header = () => {
	const {mode} = useMode()
	const [toggle, setToggle] = useState(false);
	const navigate = useNavigate();
	const handleLogOut = () => {
		window.localStorage.removeItem('token');
		navigate('/');
		window.location.reload();
	};
	const { token } = useAuth();
	const [firstMe, setFirstMe] = useState({});
	const [src, setSrc] = useState();
	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/user/me', {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => setFirstMe(res.data))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/${firstMe.image}`)
			.then((res) => {
				if (res.data) {
					setSrc(res.request.responseURL);
				}
			})
			.catch(() => setSrc(User));
	}, [firstMe]);

	return (
		<div className={mode}>
			<header className='site-header'>
			<div className='container'>
				<div className='site-header__inner'>
					<img src={Logo} alt='site logo' />
					<nav className='navbar'>
						<ul className='navbar__list'>
							<li className='navbar__item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? 'active-link'
											: 'navbar__link'
									}
									to='/'>
									Bosh sahifa
								</NavLink>
							</li>

							<li className='navbar__item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? 'active-link'
											: 'navbar__link'
									}
									to='/author'>
									Adiblar
								</NavLink>
							</li>
						</ul>
					</nav>

					<button
						className='site-header_profil-btn'
						onClick={() => setToggle(!toggle)}>
						<img
							className='site-header_profil-img'
							width={50}
							height={50}
							src={src}
							alt=''
						/>
						<svg
							width='13'
							height='9'
							viewBox='0 0 13 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M0.813965 1.10669L6.3917 7.76309L11.9694 1.10669'
								stroke='white'
								stroke-opacity='0.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</button>

					{toggle && (
						<ul
							onClick={() => setToggle(false)}
							className='profile'>
							<li className='profile__item'>
								<Link className='profile__link' to='/profile'>
									Profile
								</Link>
							</li>
							<li className='profile__item'>
								<Link className='profile__link' to='/addBook'>
									Add book
								</Link>
							</li>
							<li className='profile__item'>
								<Link className='profile__link' to='/addAuthor'>
									Add author
								</Link>
							</li>
							<li
								onClick={handleLogOut}
								className='profile__item'>
								Log out
							</li>
						</ul>
					)}
				</div>
			</div>
		</header>
		</div>
	);
};
