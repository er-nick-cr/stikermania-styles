import React from 'react';

function Issue() {
	return (
		<section className="page-section issue_container">
			<h2 className="text-center mt-0">Стикермания придет на помощь, если</h2>
			<hr className="divider" />
			<div className="issue">
				<ul>
					<li className="issue__element issue__element_one">
						Нужно оплатить миллиард экземпляров, а вам нужно всего 500
					</li>
					<li className="issue__element issue__element_two">
						Листовки попадают в урну, а не в сердечко
					</li>
					<li className="issue__element issue__element_three">
						Таргетолог не раз сливал деньги на рекламу в Яндексе и Инстаграм
					</li>
					<li className="issue__element issue__element_four">
						Брендированная упаковка стоит дорого и не окупает себя
					</li>
					<li className="issue__element issue__element_five">
						Визитки теряются, дорхенгеры раздражают, смски не доходят, и прибыль
						не такая, как хотелось бы
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Issue;
