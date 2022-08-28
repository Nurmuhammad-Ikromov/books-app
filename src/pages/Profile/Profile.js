import { NavLink, Outlet } from 'react-router-dom';
import { useMode } from '../../Hook/useMode';
import './Profile.scss';
export const Profile = () => {
	const {mode} = useMode()
	return (
		<div className={mode}>
			<div className='account'>
				<ul className='header-list'>
					<li className='header-list__item'>
						<NavLink
							to='/profile/'
							className={({ isActive }) =>
								isActive
									? 'header-list__link header-list__link--active'
									: 'header-list__link'
							}>
							<svg
								width='35'
								height='35'
								viewBox='0 0 35 35'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<rect
									width='35'
									height='35'
									rx='4'
									fill='#E5EAEE'
								/>
								<path
									d='M15.576 14.4V12.336H19.432V24H17.128V14.4H15.576Z'
									fill='#3699FF'
								/>
							</svg>

							<span>My account</span>
						</NavLink>
					</li>
					<li className='header-list__item'>
						<NavLink
							to='security'
							className={({ isActive }) =>
								isActive
									? 'header-list__link header-list__link--active'
									: 'header-list__link'
							}>
							<svg
								width='35'
								height='35'
								viewBox='0 0 35 35'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<rect
									width='35'
									height='35'
									rx='4'
									fill='#E5EAEE'
								/>
								<path
									d='M14.552 21.472C15.576 20.6187 16.392 19.9093 17 19.344C17.608 18.768 18.1147 18.1707 18.52 17.552C18.9253 16.9333 19.128 16.3253 19.128 15.728C19.128 15.184 19 14.7573 18.744 14.448C18.488 14.1387 18.0933 13.984 17.56 13.984C17.0267 13.984 16.616 14.1653 16.328 14.528C16.04 14.88 15.8907 15.3653 15.88 15.984H13.704C13.7467 14.704 14.1253 13.7333 14.84 13.072C15.5653 12.4107 16.4827 12.08 17.592 12.08C18.808 12.08 19.7413 12.4053 20.392 13.056C21.0427 13.696 21.368 14.544 21.368 15.6C21.368 16.432 21.144 17.2267 20.696 17.984C20.248 18.7413 19.736 19.4027 19.16 19.968C18.584 20.5227 17.832 21.1947 16.904 21.984H21.624V23.84H13.72V22.176L14.552 21.472Z'
									fill='#3699FF'
								/>
							</svg>
							<span>Security</span>
						</NavLink>
					</li>
					<li className='header-list__item'>
						<NavLink
							to='settings'
							className={({ isActive }) =>
								isActive
									? 'header-list__link header-list__link--active'
									: 'header-list__link'
							}>
							<svg
								width='35'
								height='35'
								viewBox='0 0 35 35'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<rect
									width='35'
									height='35'
									rx='4'
									fill='#E5EAEE'
								/>
								<path
									d='M13.88 15.408C13.9333 14.3413 14.3067 13.52 15 12.944C15.704 12.3573 16.6267 12.064 17.768 12.064C18.5467 12.064 19.2133 12.2027 19.768 12.48C20.3227 12.7467 20.7387 13.1147 21.016 13.584C21.304 14.0427 21.448 14.5653 21.448 15.152C21.448 15.824 21.272 16.3947 20.92 16.864C20.5787 17.3227 20.168 17.632 19.688 17.792V17.856C20.3067 18.048 20.7867 18.3893 21.128 18.88C21.48 19.3707 21.656 20 21.656 20.768C21.656 21.408 21.5067 21.9787 21.208 22.48C20.92 22.9813 20.488 23.376 19.912 23.664C19.3467 23.9413 18.664 24.08 17.864 24.08C16.6587 24.08 15.6773 23.776 14.92 23.168C14.1627 22.56 13.7627 21.664 13.72 20.48H15.896C15.9173 21.0027 16.0933 21.424 16.424 21.744C16.7653 22.0533 17.2293 22.208 17.816 22.208C18.36 22.208 18.776 22.0587 19.064 21.76C19.3627 21.4507 19.512 21.056 19.512 20.576C19.512 19.936 19.3093 19.4773 18.904 19.2C18.4987 18.9227 17.8693 18.784 17.016 18.784H16.552V16.944H17.016C18.5307 16.944 19.288 16.4373 19.288 15.424C19.288 14.9653 19.1493 14.608 18.872 14.352C18.6053 14.096 18.216 13.968 17.704 13.968C17.2027 13.968 16.8133 14.1067 16.536 14.384C16.2693 14.6507 16.1147 14.992 16.072 15.408H13.88Z'
									fill='#3699FF'
								/>
							</svg>
							<span>Settings</span>
						</NavLink>
					</li>
				</ul>

				<Outlet />
			</div>
		</div>
	);
};
