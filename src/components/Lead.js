import React from 'react';
import ovseee from '../images/Oivseee.svg';

function Lead() {
	return (
		<section className="page-section" id="about">
			<div className="container px-4 px-lg-5">
				<div className="row gx-4 gx-lg-5 justify-content-center">
					<div className="col-lg-12 text-center">
						<img src={ovseee} alt="Делаем неубиваемые стикеры" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Lead;
