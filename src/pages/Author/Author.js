import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Carousel } from '../../components/Carousel/Carousel';
import { Search } from '../../components/Search/Search';
import { CardAuthor } from '../../components/Card/CardAuthor';
import './Author.scss';
import { useMode } from '../../Hook/useMode';
export const Author = () => {
	const [val, setVal] = useState([]);
	const {mode} = useMode()
	return (
		<div className={mode}>
			<div className='author'>
				<Carousel />

				<div className='home__search-box'>
					<Search val={val} setVal={setVal} type='author' />
				</div>

				{val.length ? (
					<div className='home__category'>
						<h2 className='home__category-title'>Results</h2>
						<ul className='book-list'>
							{val.map((e) => (
								<li className='book-item'>
									<CardAuthor item={e} />
								</li>
							))}
						</ul>
					</div>
				) : (
					<div className='home__category'>
						<h2 className='home__category-title'>
							Asosiy kategoriyalar
						</h2>

						<>
							<div className='home__category-box'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? 'home__active-link'
											: 'home__link'
									}
									to='/author/'>
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
						</>
					</div>
				)}
			</div>
		</div>
	);
};
