import './Home.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { Search } from '../../components/Search/Search';
import { Carousel } from '../../components/Carousel/Carousel';
import { useState } from 'react';
import { Card } from '../../components/Card/Card';
import { useMode } from '../../Hook/useMode';
export const Home = () => {
	const { mode } = useMode();
	const [val, setVal] = useState('');
	return (
		<div className={` ${mode}`}>
			<div className='home'>
				<Carousel />

				<div className='home__search-box'>
					<Search val={val} setVal={setVal} type='book' />
				</div>

				{val.length ? (
					<div className='home__category'>
						<h2 className='home__category-title'>Results</h2>
						<ul className='book-list'>
							{val.map((e) => (
								<li className='book-item'>
									<Card item={e} />
								</li>
							))}
						</ul>
					</div>
				) : (
					<div className='home__category'>
						<h2 className='home__category-title'>
							Asosiy kategoriyalar
						</h2>
						<div className='home__category-box'>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'home__active-link'
										: 'home__link'
								}
								to='/'>
								Temuriylar
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'home__active-link'
										: 'home__link'
								}
								to='jadid'>
								Jadid
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'home__active-link'
										: 'home__link'
								}
								to='sovet'>
								Sovet
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'home__active-link'
										: 'home__link'
								}
								to='mustaqillik'>
								Mustaqillik
							</NavLink>
						</div>

						<Outlet />
					</div>
				)}
			</div>
		</div>
	);
};
