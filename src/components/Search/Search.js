import axios from 'axios';
import { useMode } from '../../Hook/useMode';
import './Search.scss';

export const Search = ({ type, setVal, val }) => {
	const {mode} = useMode()
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const { search } = evt.target.elements;
		axios
			.get(
				`https://book-service-layer.herokuapp.com/${type}/search?${type}=${search.value.trim()}`,
			)
			.then((res) => setVal(res.data))
			.catch((err) => console.log(err));
	};
	console.log(val);

	return (
		<div className={mode}>
			<div className='search'>
				<h3 className='search__title'>Qidirish </h3>
				<form className='search__form' onSubmit={handleSubmit}>
					<input
						className='search__input'
						placeholder='Kitoblar, audiolar, maqolalar...'
						type='text'
						name='search'
					/>
					<button className='search__button' type='submit'>
						Izlash
					</button>
				</form>
			</div>
		</div>
	);
};
