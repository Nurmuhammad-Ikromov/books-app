import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../../Hook/useAuth';
import './Add.scss';
import ContentImg from '../../assets/images/avloniy.png';
import Book from '../../assets/images/book.png';

export const AddAuthor = () => {
	const { token } = useAuth();
	console.log(token);
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const formData = new FormData();
		const {
			first_name,
			last_name,
			date_of_birth,
			date_of_death,
			bio,
			country,
			genre_id,
			image,
		} = evt.target.elements;
		formData.append('first_name', first_name.value);
		formData.append('last_name', last_name.value);
		formData.append('date_of_birth', date_of_birth.value);
		formData.append('date_of_death', date_of_death.value);
		formData.append('bio', bio.value);
		formData.append('country', country.value);
		formData.append('genre_id', genre_id.value);
		formData.append('image', image.files[0]);

		axios
			.post('https://book-service-layer.herokuapp.com/author', formData, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<div className='add'>
			<form className='add__form' onSubmit={handleSubmit}>
				<div className='add-form__right'>
					<img src={ContentImg} alt='Avloniy png' />

					<div className='add-file'>
						<label className='add-label' htmlFor='choose_file'>
							Upload image
						</label>
						<input
							className='visually-hidden'
							name='image'
							type='file'
							id='choose_file'
						/>
					</div>
				</div>

				<div className='add-form__left'>
					<h2 className='add__title'>Add author</h2>
					<input
						className='add__input'
						name='first_name'
						type='text'
						placeholder='First name'
					/>
					<input
						className='add__input'
						name='last_name'
						type='text'
						placeholder='Last name'
					/>
					<input
						className='add__input'
						name='date_of_birth'
						type='number'
						placeholder='Date of birth'
					/>
					<input
						className='add__input'
						name='date_of_death'
						type='number'
						placeholder='Date of death'
					/>
					<input
						className='add__input'
						name='genre_id'
						type='number'
						placeholder='Genre id'
					/>
					<input
						className='add__input'
						name='country'
						type='text'
						placeholder='Country'
					/>
					<input
						className='add__input'
						name='bio'
						type='text'
						placeholder='Bio'
					/>
					<button className='add-label' type='submit'>
						Create
					</button>
				</div>
			</form>
		</div>
	);
};

export const AddBook = () => {
	const { token } = useAuth();
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const formData = new FormData();
		const {
			title,
			page,
			year,
			description,
			price,
			author_id,
			genre_id,
			image,
		} = evt.target.elements;
		formData.append('title', title.value);
		formData.append('page', page.value);
		formData.append('year', year.value);
		formData.append('description', description.value);
		formData.append('price', price.value);
		formData.append('genre_id', genre_id.value);
		formData.append('author_id', author_id.value);
		formData.append('image', image.files[0]);

		axios
			.post('https://book-service-layer.herokuapp.com/book', formData, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<div className='add'>
			<form className='add__form' onSubmit={handleSubmit}>
				<div className='add-form__right'>
					<img src={Book} alt='Book png' />

					<div className='add-file add-file--active'>
						<label className='add-label add-label--active' htmlFor='choose_file'>
							Upload image
						</label>
						<input
							className='visually-hidden'
							name='image'
							type='file'
							id='choose_file'
						/>
					</div>
				</div>

				<div className='add-form__left'>
					<h2 className='add__title'>Add book</h2>
					<input
						className='add__input'
						name='title'
						type='text'
						placeholder='Title'
					/>

					<input
						className='add__input'
						name='page'
						type='number'
						placeholder='Pages'
					/>
					<input
						className='add__input'
						name='year'
						type='number'
						placeholder='Year'
					/>
					<input
						className='add__input'
						name='price'
						type='number'
						placeholder='price'
					/>
					<input
						className='add__input'
						name='genre_id'
						type='number'
						placeholder='Genre id'
					/>
					<input
						className='add__input'
						name='author_id'
						type='number'
						placeholder='Author id'
					/>
					<input
						className='add__input'
						name='description'
						type='text'
						placeholder='Description'
					/>
					<button className='add-label' type='submit'>
						Create
					</button>
				</div>
			</form>
		</div>
	);
};
