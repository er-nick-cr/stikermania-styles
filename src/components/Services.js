import React from 'react';
import ico1 from '../images/ico/ico-s-01.png';
import ico2 from '../images/ico/ico-s-02.png';
import ico3 from '../images/ico/ico-s-03.png';
import ico4 from '../images/ico/ico-s-04.png';
import ico5 from '../images/ico/ico-s-05.png';
import ico6 from '../images/ico/ico-s-06.png';
import ico7 from '../images/ico/ico-s-07.png';
import ico8 from '../images/ico/ico-s-08.png';

function Services() {
	return (
		<section className="page-section services" id="services">
			<div className="container px-4 px-lg-5">
				<h2 className="text-center mt-0">Почему мы?</h2>
				<hr className="divider divider-light" />
				<div className="row gx-4 gx-lg-5">
					<div className="col-lg-3 col-md-6 text-center">
						<div className="mt-5">
							<div className="mb-2">
								<img src={ico1} alt="Кисть" className="rotate-diagonal-1" />
							</div>
							<h3 className="h4 mb-2">
								Работаем с иллюстраторами и дизайнерами
							</h3>
							<p className="text-muted mb-0">
								Создадим лого или набор иллюстраций по вашему ТЗ или с ноля.
								Разные стили рисования и виды дизайна.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 text-center">
						<div className="mt-5">
							<div className="mb-2">
								<img src={ico2} alt="Будильник" className="rotate-diagonal-1" />
							</div>
							<h3 className="h4 mb-2">Быстрое изготовление</h3>
							<p className="text-muted mb-0">Изготовление 2-3 рабочих дня</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 text-center">
						<div className="mt-5">
							<div className="mb-2">
								<img src={ico3} alt="Документ" className="rotate-diagonal-1" />
							</div>
							<h3 className="h4 mb-2">Принимаем макеты в любом формате</h3>
							<p className="text-muted mb-0">
								Напечатаем наклейки с любых исходников, даже сканов изображений.
								Поможем подготовить такие макеты к печати и резке.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 text-center">
						<div className="mt-5">
							<div className="mb-2">
								<img src={ico4} alt="Алмаз" className="rotate-diagonal-1" />
							</div>
							<h3 className="h4 mb-2">Качественные материалы</h3>
							<p className="text-muted mb-0">
								Печатаем на виниловой пленке с ламинацией. Такие наклейки не
								боятся влаги, изображение не стирается.
							</p>
						</div>
					</div>
				</div>
				<div className="row gx-4 gx-lg-5">
					<div className="col-lg-3 col-md-6 text-center">
						<div className="mt-5">
							<div className="mb-2">
								<img src={ico5} alt="Пипетка" className="rotate-diagonal-1" />
							</div>
							<h3 className="h4 mb-2">Цветопроба бесплатно</h3>
							<p className="text-muted mb-0">
								Нужен конкретный цвет? Напечатаем несколько вариантов цвета,
								чтобы вы выбрали нужный вам оттенок.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 text-center">
						<div className="mt-5">
							<div className="mb-2">
								<img src={ico6} alt="Нож" className="rotate-diagonal-1" />
							</div>
							<h3 className="h4 mb-2">Ровная резка</h3>
							<p className="text-muted mb-0">
								Минимальная погрешность при резке. Так же делаем сквозную
								вырубку по контуру.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 text-center">
						<div className="mt-5">
							<div className="mb-2">
								<img src={ico7} alt="Единица" className="rotate-diagonal-1" />
							</div>
							<h3 className="h4 mb-2">Отдаем товар поштучно</h3>
							<p className="text-muted mb-0">
								Отдаем наклейки и листы поштучно, никаких рулонов.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
