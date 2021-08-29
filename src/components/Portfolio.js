import React, { useState } from 'react';
import bag from '../images/portfolio/fullsize/portfolio-bag.jpg';
import car from '../images/portfolio/fullsize/portfolio-car.jpg';
import paper from '../images/portfolio/fullsize/portfolio-paper.jpg';
import phone from '../images/portfolio/fullsize/portfolio-phone.jpg';
import window from '../images/portfolio/fullsize/portfolio-window.jpg';

function Portfolio() {
	const [bagRotate, setBagRotate] = useState(false);
	const [carRotate, setCarRotate] = useState(false);
	const [paperRotate, setPaperRotate] = useState(false);
	const [phoneRotate, setPhoneRotate] = useState(false);
	const [windowRotate, setWindowRotate] = useState(false);

	const handleBagRotate = () => {
		setBagRotate(!bagRotate);
	};

	const handleCarRotate = () => {
		setCarRotate(!carRotate);
	};

	const handlePaperRotate = () => {
		setPaperRotate(!paperRotate);
	};

	const handlePhoneRotate = () => {
		setPhoneRotate(!phoneRotate);
	};

	const handleWindowRotate = () => {
		setWindowRotate(!windowRotate);
	};

	return (
		<>
			<h2 className="text-center mt-0">Здарова, заебал</h2>
			<hr className="divider" />
			<div id="portfolio" className="portfolio">
				<div
					className={`card cursor ${bagRotate ? '' : 'card_hover'}`}
					onClick={handleBagRotate}
				>
					<img
						src={bag}
						className={`card__front ${bagRotate ? 'card__front_hover' : ''}`}
					/>
					<div className={`card__back ${bagRotate ? 'card__back_hover' : ''}`}>
						<h2 className="card__header">Заголовок</h2>
						<p className="card__description">
							скр скр скр скр скр скр скр скр скр скр скр
						</p>
					</div>
				</div>
				<div
					className={`card cursor ${carRotate ? '' : 'card_hover'}`}
					onClick={handleCarRotate}
				>
					<img
						src={car}
						className={`card__front ${carRotate ? 'card__front_hover' : ''}`}
					/>
					<div className={`card__back ${carRotate ? 'card__back_hover' : ''}`}>
						<h2 className="card__header">Заголовок</h2>
						<p className="card__description">
							скр скр скр скр скр скр скр скр скр скр скр
						</p>
					</div>
				</div>
				<div
					className={`card cursor ${paperRotate ? '' : 'card_hover'}`}
					onClick={handlePaperRotate}
				>
					<img
						src={paper}
						className={`card__front ${paperRotate ? 'card__front_hover' : ''}`}
					/>
					<div
						className={`card__back ${paperRotate ? 'card__back_hover' : ''}`}
					>
						<h2 className="card__header">Заголовок</h2>
						<p className="card__description">
							скр скр скр скр скр скр скр скр скр скр скр
						</p>
					</div>
				</div>
				<div
					className={`card cursor ${phoneRotate ? '' : 'card_hover'}`}
					onClick={handlePhoneRotate}
				>
					<img
						src={phone}
						className={`card__front ${phoneRotate ? 'card__front_hover' : ''}`}
					/>
					<div
						className={`card__back ${phoneRotate ? 'card__back_hover' : ''}`}
					>
						<h2 className="card__header">Заголовок</h2>
						<p className="card__description">
							скр скр скр скр скр скр скр скр скр скр скр
						</p>
					</div>
				</div>
				<div
					className={`card cursor ${windowRotate ? '' : 'card_hover'}`}
					onClick={handleWindowRotate}
				>
					<img
						src={window}
						className={`card__front card__front_window ${
							windowRotate ? 'card__front_hover' : ''
						}`}
					/>
					<div
						className={`card__back ${windowRotate ? 'card__back_hover' : ''}`}
					>
						<h2 className="card__header">Заголовок</h2>
						<p className="card__description">
							скр скр скр скр скр скр скр скр скр скр скр
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Portfolio;
