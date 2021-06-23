import React from 'react';
import ParralaxElement from './ParralaxElement';

function ParallaxLead() {
	return (
		<section className="lead">
			<h2 className="lead__title">
				ДЕЛАЕМ <span className="lead__accent">НЕУБИВАЕМЫЕ</span> СТИКЕРЫ
			</h2>
			<ParralaxElement />
			<h2 className="lead__title">
				Любых размеров и форм <span className="lead__accent">за 2-3 дня</span>
			</h2>
		</section>
	);
}

export default ParallaxLead;
