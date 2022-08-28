import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { CardAuthor } from '../Card/CardAuthor';

export const Mustaqillik = ({type}) => {
	const [book, setBook] = useState([]);
	useEffect(() => {
		axios
		.get(`https://book-service-layer.herokuapp.com/${type}/genreId/4`)
			.then((res) => setBook(res.data))
			.catch((err) => console.log(err));
	}, [type]);
	console.log(book);
	return (
		<div>
			<ul className='book-list'>
				{book.length && book.map((el) => <li className='book-item'>{
					type === 'author'? <CardAuthor item={el} /> : <Card item={el} />
				}</li>)}
			</ul>
		</div>
	);
};
