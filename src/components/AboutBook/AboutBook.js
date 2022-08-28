import { useState } from 'react';
import { useMode } from '../../Hook/useMode';
import './AboutBook.scss';
export const AboutBook = () => {
	const {mode} = useMode()
	const [click, setClick] = useState(false);
	return (
		<div className={mode}>
			<div className='quote'>
				<div className='quote__box'>
					<quote className='quote__info'>
						Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z
						g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr
						bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga
						yetolarmidi? Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib
						tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni
						egarlaganlargina ertangi kunga yetib keladi.
					</quote>

					<div className='quote__info-bottom'>
						<button
							onClick={() => setClick(!click)}
							className={
								click
									? 'quote__info-active quote__info-btn'
									: 'quote__info-btn'
							}>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M20.205 4.79111C19.068 3.66011 17.574 3.03711 15.996 3.03711C14.513 3.03711 13.104 3.58911 12 4.59511C10.896 3.58911 9.48798 3.03711 8.00398 3.03711C6.42598 3.03711 4.93198 3.66011 3.79098 4.79511C1.43798 7.15811 1.43898 10.8541 3.79298 13.2071L12 21.4141L20.207 13.2071C22.561 10.8541 22.562 7.15811 20.205 4.79111Z'
									fill='white'
								/>
							</svg>
						</button>

						<button className='quote__info-share'>
							<svg
								width='25'
								height='24'
								viewBox='0 0 25 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M3.16895 12C3.16895 13.654 4.51495 15 6.16895 15C6.96295 15 7.68094 14.685 8.21795 14.18L14.2089 17.604C14.1909 17.734 14.1689 17.864 14.1689 18C14.1689 19.654 15.5149 21 17.1689 21C18.8229 21 20.1689 19.654 20.1689 18C20.1689 16.346 18.8229 15 17.1689 15C16.3749 15 15.6569 15.315 15.1199 15.82L9.12895 12.397C9.14695 12.266 9.16895 12.136 9.16895 12C9.16895 11.864 9.14695 11.734 9.12895 11.603L15.1199 8.18C15.6569 8.685 16.3749 9 17.1689 9C18.8229 9 20.1689 7.654 20.1689 6C20.1689 4.346 18.8229 3 17.1689 3C15.5149 3 14.1689 4.346 14.1689 6C14.1689 6.136 14.1909 6.266 14.2089 6.397L8.21795 9.82C7.68094 9.315 6.96295 9 6.16895 9C4.51495 9 3.16895 10.346 3.16895 12Z'
									fill='white'
								/>
							</svg>
						</button>
					</div>
				</div>

				<div className='quote__box'>
					<quote className='quote__info'>
						Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra,
						tuproq tagida yotganlar ko‘p. Yer qatlami odam
						suyaklariga to‘lib ketgan.
					</quote>
				</div>
			</div>
		</div>
	);
};
