import React from 'react';
import Coverflow from 'react-coverflow';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import travelFull from '../images/portfolio/fullsize/1.jpg';
import brandFull from '../images/portfolio/fullsize/2.jpg';
import imageFull from '../images/portfolio/fullsize/3.jpg';
import stickerpageFull from '../images/portfolio/fullsize/5.jpg';
import carFull from '../images/portfolio/fullsize/6.jpg';

function Slider() {
	return (
		<Coverflow
			displayQuantityOfSide={0.7}
			navigation
			infiniteScroll
			enableHeading
			media={{
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100%',
				height: '100vh',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
			}}
		>
			<img src={travelFull} alt="Путешествующая визитка" />

			<img src={brandFull} alt="Брендированная упаковка" />

			<img src={imageFull} alt="Имиджевый продукт" />

			<img src={stickerpageFull} alt="Стикерпэйдж" />

			<img src={carFull} alt="Резка из цветных пленок" />
		</Coverflow>
	);
}

export default Slider;
