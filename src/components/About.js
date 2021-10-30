import React from 'react';
import image from '../images/intro-picture.png';

function About() {
	return (
		<section id="about" className="page-section bg-secondary">
			<div className="container px-4 px-lg-5">
				<div className="row gx-4 gx-lg-5 justify-content-center">
					<div className="col-lg-8 text-center">
						<h2 className="mt-0">
							<strong>Привет</strong>
						</h2>
						<hr className="divider divider-light" />
					</div>
				</div>
				<div className="row gx-4 gx-lg-5 justify-content-center">
					<div className="col-lg-6">
						<img width="100%" src={image} alt="Я Наташа" />
					</div>
					<div className="col-lg-6">
						<div>
							Я - Наташа, а <strong>Стикермания</strong> - мой проект, который
							помогает бизнесу в Красноярске запомниться своим клиентам за счёт
							<strong> ярких неубиваемых наклеек.</strong>
						</div>
						<div>
							Их можно{' '}
							<strong>лепить на упаковку или раздавать, как сувенирку.</strong>{' '}
							В любом случае получится эффективно, ёмко и узнаваемо.
						</div>{' '}
						<div>
							<strong>
								Это реклама, которую ваш клиент захочет оставить себе.{' '}
							</strong>
						</div>
						<div>
							А еще мы делаем огромные клейкие постеры -{' '}
							<strong>до двух метров размером.</strong>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
