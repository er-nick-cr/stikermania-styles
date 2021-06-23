import React, { useRef, useEffect } from 'react';
import cube from '../images/Hrenubiesh-cube.png';
import face from '../images/Hrenubiesh-smile.png';
import bullets from '../images/Hrenubiesh-bullets.png';
import bulletTop from '../images/bullet-top.png';
import bulletMiddle from '../images/bullet-middle.png';
import bulletBottom from '../images/bullet-bottom.png';
import Parallax from 'parallax-js';

const ParralaxElement = () => {
	const sceneEl = useRef(null);

	useEffect(() => {
		const parallaxInstance = new Parallax(sceneEl.current, {
			relativeInput: true,
			hoverOnly: false,
			limitY: 0,
			limitX: 82,
		});

		parallaxInstance.enable();

		return () => parallaxInstance.disable();
	}, []);

	return (
		<div className="parallax" ref={sceneEl}>
			<div data-depth="0.2" className="parallax__cube_z-index">
				<img className="parallax__cube" src={cube} />
			</div>
			<div data-depth="0.3">
				<img className="parallax__face" src={face} />
			</div>
			<div data-depth="0.5" className="parallax__bullets_z-index">
				<img className="parallax__bullet_top" src={bulletTop} />
			</div>
			<div data-depth="0.5" className="parallax__bullets_z-index">
				<img className="parallax__bullet_middle" src={bulletMiddle} />
			</div>
			<div
				data-depth="-0.5"
				data-invert-x="false"
				className="parallax__bullets_z-index"
			>
				<img className="parallax__bullet_bottom" src={bulletBottom} />
			</div>
		</div>
	);
};

export default ParralaxElement;
