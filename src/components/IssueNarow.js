import React from 'react';
import pointer from '../images/issue-pointer.png';

function IssueNarrow() {
	return (
		<section className="page-section issue_container">
			<h2 className="text-center mt-0">Стикермания придет на помощь, если</h2>
			<hr className="divider" />
			<div className="issue-narrow">
				<ul className="issue__items-container">
					<li className="issue__element_narrow">
						<img src={pointer} className="issue__pointer" />
						<p className="issue__paragraph">
							Листовки попадают в урну, а не в сердечко
						</p>
					</li>
					<li className="issue__element_narrow">
						<img src={pointer} className="issue__pointer" />
						<p className="issue__paragraph">
							Нужно оплатить миллиард экземпляров, а вам нужно всего 500
						</p>
					</li>
					<li className="issue__element_narrow">
						<img src={pointer} className="issue__pointer" />
						<p className="issue__paragraph">
							Таргетолог не раз сливал деньги на рекламу в Яндексе и Инстаграм
						</p>
					</li>
					<li className="issue__element_narrow">
						<img src={pointer} className="issue__pointer" />
						<p className="issue__paragraph">
							Брендированная упаковка стоит дорого и не окупает себя
						</p>
					</li>
					<li className="issue__element_narrow">
						<img src={pointer} className="issue__pointer" />
						<p className="issue__paragraph">
							Визитки теряются, дорхенгеры раздражают, смски не доходят, и
							прибыль не такая, как хотелось бы
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default IssueNarrow;
