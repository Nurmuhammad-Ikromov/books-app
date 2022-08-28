import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../../Hook/useAuth';
import './Account.scss';
import Camera from '../../assets/images/camera.svg';
import User from '../../assets/images/user.png';
import { useMode } from '../../Hook/useMode';

export const Account = () => {
	const { token } = useAuth();
	const { mode, setMode } = useMode();
	const [src, setSrc] = useState();
	const [firstMe, setFirstMe] = useState({});
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

	console.log(firstMe);
	const handleProfileSubmit = (evt) => {
		evt.preventDefault();

		const formData = new FormData();
		const { first_name, last_name, phone, image } = evt.target.elements;

		formData.append('first_name', first_name.value);
		formData.append('last_name', last_name.value);
		formData.append('phone', phone.value);
		formData.append('image', image.files[0]);

		axios
			.put(
				'https://book-service-layer.herokuapp.com/user/account',
				formData,
				{
					headers: {
						Authorization: token.token,
					},
				},
			)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<div className='container'>
			<div className='settings'>
				<div className='settings__inner settings__active-inner'>
					<form
						onSubmit={handleProfileSubmit}
						className='settings__form'>
						<div className='settings__file-box'>
							<img
								className='settings__profil-img'
								width={175}
								height={175}
								src={src}
								alt=''
							/>
							<label
								className='settings__camera-label'
								htmlFor='profile-img'>
								<img src={Camera} alt='camera icon' />
							</label>
							<input
								type='file'
								id='profile-img'
								name='image'
								className='visually-hidden'
								required
							/>
						</div>
						<div className='settings__form-main'>
							<h2 className='settings__title'>My Profile</h2>
							<label
								className='settings__label'
								htmlFor='first_name'>
								First name
							</label>
							<input
								type='text'
								id='first_name'
								className='settings__input'
								name='first_name'
								defaultValue={firstMe.first_name}
								required
							/>

							<label
								className='settings__label'
								htmlFor='last_name'>
								Last name
							</label>
							<input
								type='text'
								id='last_name'
								className='settings__input'
								name='last_name'
								required
								defaultValue={firstMe.last_name}
							/>

							<div className='settings__form-data'>
								<div className='settings__form-phone'>
									<label
										className='settings__label'
										htmlFor='phone'>
										Phone
									</label>
									<input
										type='number'
										id='phone'
										className='settings__input'
										name='phone'
										required
										defaultValue={firstMe.phone}
									/>
								</div>

								<div className='settings__form-email'>
									<label
										className='settings__label'
										htmlFor='email'>
										Email
									</label>
									<input
										type='email'
										id='email'
										className='settings__input'
										name='email'
										required
										defaultValue={firstMe.email}
									/>
								</div>
							</div>
							<button
								className='settings__form-submit'
								type='submit'>
								Save changes
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export const Security = () => {
	const { token } = useAuth();

	const [firstMe, setFirstMe] = useState({});
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

	const handleSettingSubmit = (evt) => {
		evt.preventDefault();
		const formDatas = new FormData();
		const [email, currentPassword, newPassword, confirmPassword] =
			evt.target.elements;
		if (newPassword.value === confirmPassword.value) {
			formDatas.append('email', email.value);
			formDatas.append('currentPassword', currentPassword.value);
			formDatas.append('newPassword', newPassword.value);
		} else console.log(confirmPassword.value);

		axios
			.put(
				'https://book-service-layer.herokuapp.com/user/security',
				formDatas,
				{
					headers: {
						Authorization: token.token,
					},
				},
			)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<div className='container'>
			<div className='settings__inner'>
				<form onSubmit={handleSettingSubmit} className='settings__form'>
					<div className='settings__form-main'>
						<h2 className='settings__title'>
							Change Or Recover Your Password:
						</h2>
						<label className='settings__label' htmlFor='email'>
							Email
						</label>
						<input
							type='text'
							id='first_name'
							className='settings__input'
							name='email'
							defaultValue={firstMe.email}
							required
						/>

						<label
							className='settings__label'
							htmlFor='currentPassword'>
							Current password
						</label>
						<input
							type='text'
							id='currentPassword'
							className='settings__input'
							name='currentPassword'
							required
						/>

						<div className='settings__form-data'>
							<div className='settings__form-phone'>
								<label
									className='settings__label'
									htmlFor='newPassword'>
									New password
								</label>
								<input
									type='text'
									id='newPassword'
									className='settings__input'
									name='newPassword'
									required
								/>
							</div>

							<div className='settings__form-email'>
								<label
									className='settings__label'
									htmlFor='confirmPassword'>
									Confirm password
								</label>
								<input
									type='text'
									id='confirmPassword'
									className='settings__input'
									name='confirmPassword'
									required
								/>
							</div>
						</div>
						<button className='settings__form-submit' type='submit'>
							Save changes
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export const Settings = () => {
	const { mode, setMode } = useMode();
	const [check, setCheck] = useState(
		JSON.parse(window.localStorage.getItem('check')),
	);
	console.log(mode);
	return (
		<div className={mode}>
			<div className='container'>
				<div className={`settings__inner-box`}>
					<h2 className='settings__title'>Settings</h2>
					<form
						onSubmit={() => {
							window.localStorage.setItem(
								'mode',
								JSON.stringify(mode),
							);
							window.localStorage.setItem(
								'check',
								JSON.stringify(check),
							);
						}}>
						<div className='lang-box'>
							<label className='lang-label' htmlFor='lang'>
								Language
							</label>
							<select
								className='lang-select'
								name='select_language'
								id='lang'>
								<option value='English'>English</option>
							</select>
						</div>

						<div className='theme-box'>
							<p>Theme</p>

							<input
								className='visually-hidden mode-input'
								id='mode'
								type='checkbox'
								checked={check}
							/>
							<label
								onClick={() =>
									mode === 'dark'
										? (setMode('light'), setCheck(false))
										: (setMode('dark'), setCheck(true))
								}
								className='mode'
								htmlFor='mode'>
								<span className='mode__span'></span>
							</label>
						</div>

						<button className='settings__form-submit' type='submit'>
							Save Changes
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
