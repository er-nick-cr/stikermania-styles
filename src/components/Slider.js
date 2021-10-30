import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import march from '../images/slider/1.jpg';
import girl from '../images/slider/2.jpg';
import table from '../images/slider/3.jpg';
import golography from '../images/slider/4.JPEG';
import pot from '../images/slider/5.JPEG';
import poster from '../images/slider/6.JPG';
import snowboard from '../images/slider/7.jpg';
import dj from '../images/slider/8.JPEG';
import vpiska from '../images/slider/9.JPEG';
import tree from '../images/slider/10.JPG';
import door from '../images/slider/11.jpg';
import pen from '../images/slider/12.JPG';
import red from '../images/slider/13.JPG';
import hands from '../images/slider/14.JPG';
import banana from '../images/slider/15.JPG';
import stairs from '../images/slider/16.JPEG';
import scissors from '../images/slider/17.JPEG';
import forward from '../images/slider/18.JPEG';
import vinyl from '../images/slider/19.JPEG';
import bus from '../images/slider/20.JPEG';
import colors from '../images/slider/21.JPG';
import sand from '../images/slider/22.jpg';
import micro from '../images/slider/23.jpg';

const images = [
	march,
	girl,
	table,
	golography,
	pot,
	poster,
	snowboard,
	dj,
	vpiska,
	tree,
	door,
	pen,
	red,
	hands,
	banana,
	stairs,
	scissors,
	forward,
	vinyl,
	bus,
	colors,
	sand,
	micro,
];

function SliderCorusel() {
	const [imageIndex, setImageIndex] = useState(0);

	const NextArrow = ({ onClick }) => {
		return (
			<div className="arrow next" onClick={onClick}>
				<FaArrowRight />
			</div>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<div className="arrow prev" onClick={onClick}>
				<FaArrowLeft />
			</div>
		);
	};

	const settings = {
		infinite: true,
		lazyload: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '50px',
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
		className: 'slider__slide',
		dots: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className="slider">
			<div className="slider__container">
				<h2 className="text-center mt-0">Эти ребята уже с нами</h2>
				<hr className="divider divider-light" />
				<Slider {...settings}>
					{images.map((image, index) => (
						<div
							className={index === imageIndex ? 'slide active-slide' : 'slide'}
						>
							<img className="slider__image" src={image} alt="img" />
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
export default SliderCorusel;
