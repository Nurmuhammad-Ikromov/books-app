import BackImage from '../../assets/images/carousel.png';
import ContentImg from '../../assets/images/navoiy.png';
import './Carousel.scss';
export const Carousel = () => {
	return (
		<div className='container'>
			{/* <div className='test'></div> */}
			<div
				id='carouselExampleDark'
				class='carousel carousel-dark slide'
				data-bs-ride='carousel'>
				<div class='carousel-indicators'>
					<button
						type='button'
						data-bs-target='#carouselExampleDark'
						data-bs-slide-to='0'
						class='active'
						aria-current='true'
						aria-label='Slide 1'></button>
					<button
						type='button'
						data-bs-target='#carouselExampleDark'
						data-bs-slide-to='1'
						aria-label='Slide 2'></button>
					<button
						type='button'
						data-bs-target='#carouselExampleDark'
						data-bs-slide-to='2'
						aria-label='Slide 3'></button>
					<button
						type='button'
						data-bs-target='#carouselExampleDark'
						data-bs-slide-to='3'
						aria-label='Slide 4'></button>
				</div>
				<div class='carousel-inner'>
					<div class='carousel-item active' data-bs-interval='6000'>
						<div className="carousel__inner">
                            <h3 className='carousel__title'>Temuriylar davri adabiyoti</h3>
                        </div>
					</div>
					<div class='carousel-item' data-bs-interval='3000'>
						<div className="carousel__inner">
                            <h3 className='carousel__title'>Jadidlar davri adabiyoti</h3>
                        </div>
					</div>
					<div class='carousel-item' data-bs-interval='2000'>
						<div className="carousel__inner">
                            <h3 className='carousel__title'>Sovet davri adabiyoti</h3>
                        </div>
					</div>
					<div class='carousel-item'>
						<div className="carousel__inner">
                            <h3 className='carousel__title'>Mustaqillik davri adabiyoti</h3>
                        </div>
					</div>
				</div>
				<button
					class='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleDark'
					data-bs-slide='prev'>
					<span
						class='carousel-control-prev-icon'
						aria-hidden='true'></span>
					<span class='visually-hidden'>Previous</span>
				</button>
				<button
					class='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleDark'
					data-bs-slide='next'>
					<span
						class='carousel-control-next-icon'
						aria-hidden='true'></span>
					<span class='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	);
};
