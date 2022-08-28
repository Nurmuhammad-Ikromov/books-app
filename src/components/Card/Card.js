import './Card.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Hook/useAuth';

export const Card = ({ item}) => {
	const [author, setAuthor] = useState([]);
	const [src, setSrc] = useState();
	const { token } = useAuth();
	useEffect(() => {
		axios
			.get(
				'https://book-service-layer.herokuapp.com/author/authorId/' +
					item.author_id,
				{
					headers: {
						Authorization: token.token,
					},
				},
			)
			.then((res) => setAuthor(res.data))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/${item.image}`)
			.then((res) => {
				if (res.data) {
					setSrc(res.request.responseURL);
				}
			})
			.catch(() =>  setSrc('https://via.placeholder.com/165x245'));
	}, [item]);

	console.log(author);
	return (
		<Link to={`/book/bookId/${item.id}`} className='card__link'>
			{src && (
				<img
					width='165'
					height={245}
					className='card-img'
					src={src}
					alt='book'
				/>
			)}
			<div className='card__body'>
				<h3 className='card__title'>{item.title}</h3>
				{author && (
					<p className='card__author'>
						{author.first_name} {author.last_name}
					</p>
				)}
			</div>
		</Link>
	);
};
