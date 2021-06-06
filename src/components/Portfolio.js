import React from 'react';
import travel from '../images/portfolio/thumbnails/1.jpg';
import brand from '../images/portfolio/thumbnails/2.jpg';
import image from '../images/portfolio/thumbnails/3.jpg';
import stickerpage from '../images/portfolio/thumbnails/5.jpg';
import car from '../images/portfolio/thumbnails/6.jpg';

function Portfolio({ onClick }) {
	return (
		<div id="portfolio" onClick={onClick}>
			<div className="container-fluid p-0 cursor">
				<div className="row g-0">
					<div className="col-lg-4 col-sm-4">
						<div
							id="1"
							className="portfolio-box"
							href=""
							title="Путешествующая визитка"
						>
							<img
								className="img-fluid"
								src={travel}
								alt="Путешествующая визитка"
							/>
							<div className="portfolio-box-caption">
								<div className="project-name">Путешествующая визитка</div>
								<div className="project-category text-white-50">
									Реклама, которая всегда с тобой
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-4">
						<div
							className="portfolio-box"
							href=""
							title="Брендированная упаковка"
						>
							<img
								className="img-fluid"
								src={brand}
								alt="Брендированная упаковка"
							/>
							<div className="portfolio-box-caption">
								<div className="project-name">Брендированная упаковка</div>
								<div className="project-category text-white-50">
									описание описание описание
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-4">
						<div className="portfolio-box" href="" title="Имиджевый продукт">
							<img className="img-fluid" src={image} alt="Имиджевый продукт" />
							<div className="portfolio-box-caption">
								<div className="project-name">Имиджевый продукт</div>
								<div className="project-category text-white-50">
									описание описание описание
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row g-0">
					<div className="col-lg-6 col-sm-6">
						<div className="portfolio-box" href="" title="Стикерпэйдж">
							<img className="img-fluid" src={stickerpage} alt="Стикерпэйдж" />
							<div className="portfolio-box-caption">
								<div className="project-name">Стикерпэйдж</div>
								<div className="project-category text-white-50">
									Страница со стикерами. Каждая наклейка на странице вырезана по
									контуру.
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-6">
						<div className="portfolio-box" href="" title="Project Name">
							<img
								className="img-fluid"
								src={car}
								alt="Резка из цветных пленок"
							/>
							<div className="portfolio-box-caption">
								<div className="project-name">Резка из цветных пленок</div>
								<div className="project-category text-white-50">
									Плоттерная резка из пленок разных оттенков. Для создания
									аппликаций на стекла снаружи и с обратной стороны.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
