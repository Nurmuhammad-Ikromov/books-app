import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink, Link } from 'react-router-dom';
import './Single.scss';
import { useAuth } from '../../Hook/useAuth';
import { Card } from '../../components/Card/Card';

export const SingleAuthor = () => {
	const { id } = useParams();
	const { token } = useAuth();
	const [book, setBook] = useState({});
	const [author, setAuthor] = useState([]);
	const [src, setSrc] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://book-service-layer.herokuapp.com/author/books/' + id,
				{
					headers: {
						Authorization: token.token,
					},
				},
			)
			.then(function (response) {
				setBook(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [id]);

	console.log(book);
	useEffect(() => {
		axios
			.get(
				'https://book-service-layer.herokuapp.com/author/authorId/' +
					id,
				{
					headers: {
						Authorization: token.token,
					},
				},
			)
			.then((res) => setAuthor(res.data))
			.catch((err) => console.log(err));
	}, []);

	console.log(author);

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/${author.image}`)
			.then((res) => {
				if (res.data) {
					setSrc(res.request.responseURL);
				}
			})
			.catch(() => setSrc('https://via.placeholder.com/520x820'));
	}, [author]);

	return (
		<div className='single'>
			<div className='container'>
				<div className='single-book'>
					<div className='single-author__data'>
						<img
							width={520}
							height={820}
							src={src}
							alt='personal image'
						/>

						<div className='single-author__year'>
							<div className='single-author__year-left'>
								<span>Tavallud sanasi</span>
								<p className='single-author__year-birth'>
									{author.date_of_birth}
								</p>
								<p>{author.country}</p>
							</div>

							<div className='single-author__year-left'>
								<span>Vafot etgan sanasi</span>
								<p className='single-author__year-birth'>
									{author.date_of_death}
								</p>
								<p>{author.country}</p>
							</div>
						</div>
					</div>
					<div className='single-book__info '>
						<h3 className='single-book__title'>
							{author.first_name} {author.last_name}
						</h3>

						<p className='single-author__bio'>{author.bio}</p>

						<div className='single-author__info-box'>
							<h4 className='single-author__info'>Ijodi</h4>
							<p className='single-author__info-text'>
								{author.bio}
							</p>
						</div>

						{book.length ? (
							<div className='author-books'>
								<div className='author-books__header'>
									<h4 className='author-books__title'>
										Asarlari
									</h4>
									<Link className='author-books__link' to='/'>
										Barchasini ko'rish
									</Link>
								</div>

								<ul className='author-books__list'>
									{book.map((e) => (
										<li className='author-books__item'>
											<Card item={e} />
										</li>
									))}
								</ul>
							</div>
						) : ''}
					</div>
				</div>
			</div>
		</div>
	);
};
