import React from 'react';
import Slider from './Slider';

function SliderContainer({ isOpened, onClose }) {
	return (
		<div className={`slider ${isOpened ? 'slider_opened' : ''}`}>
			<Slider />

			<button className="slider__close" onClick={onClose}></button>
		</div>
	);
}

export default SliderContainer;
