import axios from 'axios';
import { useEffect, useState } from 'react';
import {
	useParams,
	Outlet,
	NavLink,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import './Single.scss';
import { useAuth } from '../../Hook/useAuth';
import { AboutAuthor } from '../../components/AboutAuthor/AboutAuthor';
import { AboutBook } from '../../components/AboutBook/AboutBook';
import { Taqriz } from '../../components/Taqriz/Taqriz';
import { Card } from '../../components/Card/Card';
import { useMode } from '../../Hook/useMode';
export const Single = () => {
	const { id } = useParams();
	const { token } = useAuth();
	const [book, setBook] = useState({});
	const [author, setAuthor] = useState([]);
	const [genre, setGenre] = useState([]);
	const [src, setSrc] = useState();
	const [favourite, setFavourite] = useState([]);
	const {mode} = useMode()

	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/genre')
			.then((res) => setGenre(res.data))
			.catch((err) => console.log(err));
	}, []);

	console.log(genre);

	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/book/bookId/' + id, {
				headers: {
					Authorization: token.token,
				},
			})
			.then(function (response) {
				setBook(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [id]);

	useEffect(() => {
		axios
			.get(
				'https://book-service-layer.herokuapp.com/author/authorId/' +
					book.author_id,
				{
					headers: {
						Authorization: token.token,
					},
				},
			)
			.then((res) => setAuthor(res.data))
			.catch((err) => console.log(err));
	}, [book]);

	console.log(author);

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/${book.image}`)
			.then((res) => {
				if (res.data) {
					setSrc(res.request.responseURL);
				}
			})
			.catch(() => setSrc('https://via.placeholder.com/520x820'));
	}, [book]);

	console.log(book);

	useEffect(() => {
		axios
			.get(
				`https://book-service-layer.herokuapp.com/book/genreId/${book.genre_id}`,
			)
			.then((res) => setFavourite(res.data))
			.catch((err) => console.log(err));
	}, [book]);

	console.log(favourite);

	return (
		<div className={mode}>
			<div className='single'>
				<div className='container'>
					<div className='single-book'>
						<img width={520} height='820' src={src} alt='' />
						<div className='single-book__info '>
							<h3 className='single-book__title'>{book.title}</h3>
							<p className='single-book__author'>
								{author.first_name} {author.last_name}
							</p>

							<p className='single-book__pages'>
								Sahifalar soni:{' '}
								<span >
									{book.page}
								</span>
							</p>

							<p className='single-book__year'>
								Chop etilgan:{' '}
								<span >
									{book.year}
								</span>
							</p>

							<p className='single-book__genre'>
								Janri:{' '}
								<span >
									{genre.map((e) =>
										e.id === book.genre_id ? e.name : '',
									)}
								</span>
							</p>

							<p className='single-book__write'>
								Nashriyot:
								<span >
									{' '}
									Nihol nashr
								</span>
							</p>

							<div class='accordion' id='accordionExample'>
								<div class='accordion-item'>
									<h2
										class='accordion-header'
										id='headingTwo'>
										<button
											class='accordion-button collapsed '
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseTwo'
											aria-expanded='false'
											aria-controls='collapseTwo'>
											To'liq ma'lumot
										</button>
									</h2>
									<div
										id='collapseTwo'
										class='accordion-collapse collapse'
										aria-labelledby='headingTwo'
										data-bs-parent='#accordionExample'>
										<div class='accordion-body'>
											{book.description}
										</div>
									</div>
								</div>
							</div>

							<p
								style={{
									color: '#C9AC8C',
									margin: '47px 0 30px',
								}}>
								Mavjud formatlar
							</p>
							<div className='single-page__formats'>
								<div className='single-page__paper'>
									<svg
										width='25'
										height='25'
										viewBox='0 0 25 25'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M3.75098 5.70569V8.70569V14.7057V17.7057V19.7057C3.75098 21.9067 5.54498 22.7057 6.75098 22.7057H21.751V20.7057H6.76298C6.30098 20.6937 5.75098 20.5117 5.75098 19.7057C5.75098 18.8997 6.30098 18.7177 6.76298 18.7057H19.751H20.751H21.751V17.7057V15.7057V4.70569C21.751 3.60269 20.854 2.70569 19.751 2.70569H6.75098C5.54498 2.70569 3.75098 3.50469 3.75098 5.70569Z'
											fill='white'
										/>
									</svg>

									<p
										style={{
											margin: 0,
											marginTop: '10px',
											marginBottom: '8px',
											
										}}>
										Qog’oz kitob
									</p>
									<span>{book.price} $</span>
								</div>
								<div className='single-page__paper'>
									<svg
										width='25'
										height='25'
										viewBox='0 0 25 25'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M20.251 12.7056V10.9986C20.251 6.55663 16.772 2.83763 12.496 2.70863C10.292 2.65763 8.24498 3.44463 6.67998 4.96463C5.11298 6.48463 4.25098 8.52363 4.25098 10.7056V12.7056C3.14798 12.7056 2.25098 13.6026 2.25098 14.7056V18.7056C2.25098 19.8086 3.14798 20.7056 4.25098 20.7056H6.25098V10.7056C6.25098 9.06863 6.89698 7.53963 8.07198 6.39963C9.24598 5.25963 10.807 4.66063 12.435 4.70863C15.643 4.80463 18.251 7.62663 18.251 10.9986V20.7056H20.251C21.354 20.7056 22.251 19.8086 22.251 18.7056V14.7056C22.251 13.6026 21.354 12.7056 20.251 12.7056Z'
											fill='white'
										/>
										<path
											d='M7.25098 12.7057H9.25098V20.7057H7.25098V12.7057ZM15.251 12.7057H17.251V20.7057H15.251V12.7057Z'
											fill='white'
										/>
									</svg>

									<p
										style={{
											margin: 0,
											marginTop: '10px',
											marginBottom: '8px',
										
										}}>
										Audio kitob
									</p>
									<span>6:23 soat</span>
								</div>
								<div className='single-page__paper'>
									<svg
										width='25'
										height='25'
										viewBox='0 0 25 25'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M6.75098 2.70569C5.64798 2.70569 4.75098 3.60269 4.75098 4.70569V20.7057C4.75098 21.8087 5.64798 22.7057 6.75098 22.7057H18.751C19.854 22.7057 20.751 21.8087 20.751 20.7057V4.70569C20.751 3.60269 19.854 2.70569 18.751 2.70569H6.75098ZM6.75098 17.7057V5.70569H18.751L18.753 17.7057H6.75098Z'
											fill='white'
										/>
									</svg>

									<p
										style={{
											margin: 0,
											marginTop: '10px',
											marginBottom: '8px',
										
										}}>
										Elektron
									</p>
									<span>pdf, epub</span>
								</div>
							</div>
						</div>
					</div>

					<div className='single-quote'>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'single__link--active single__link'
									: 'single__link'
							}
							to='author'>
							Muallif haqida
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'single__link--active single__link'
									: 'single__link'
							}
							to='quote'>
							Kitobdan iqtiboslar
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'single__link--active single__link'
									: 'single__link'
							}
							to='review'>
							Kitobxonlar taqrizi
						</NavLink>
					</div>
					<Outlet />

					<Routes>
						<Route
							path='author'
							element={<AboutAuthor author={author} />}
						/>
						<Route path='quote' element={<AboutBook />} />
						<Route path='review' element={<Taqriz />} />
					</Routes>

					<div className='favourite'>
						<div className='favourite__header'>
							<p className='favourite-title'>
								Sizga yoqishi mumkin
							</p>

							<Link className='favourite__link' to='/'>
								Barchasini ko'rish
							</Link>
						</div>

						{favourite.length && (
							<ul className='book-list'>
								{favourite.map((e) => (
									<li className='book-item'>
										<Card item={e} />
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
