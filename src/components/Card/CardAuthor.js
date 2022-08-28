import './Card.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const CardAuthor = ({ item, type }) => {
	const [src, setSrc] = useState();

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/${item.image}`)
			.then((res) => {
				if (res.data) {
					setSrc(res.request.responseURL);
				}
			})
			.catch(() =>  setSrc('https://via.placeholder.com/174x132'));
	}, [item]);

	console.log(item);
	return (
		<Link to={`/author/${item.id}`} className=' card__link'>
			{src && (
				<img width='174' height='132' className='card-author-img' src={src} alt='book' />
			)}
			<div className='card__body card__body--author'>
				<h3 className='card__title'>
					{item.first_name} {item.last_name}
				</h3>

				<p className='card__date'>
					{item.date_of_birth}-{item.date_of_death}
				</p>

			</div>
		</Link>
	);
};
