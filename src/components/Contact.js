import React from 'react';

function Contact() {
	return (
		<section className="page-section" id="contact">
			<div className="container px-4 px-lg-5">
				<div className="row gx-4 gx-lg-5 justify-content-center">
					<div className="col-lg-8 col-xl-6 text-center">
						<h2 className="mt-0">Оставь заявку и узнай стоимость</h2>
						<hr className="divider" />
						<p className="text-muted mb-5">
							Заполни форму и получи точный рассчет стоимости своего заказа
						</p>
					</div>
				</div>
				<div className="row gx-4 gx-lg-5 justify-content-center mb-5">
					<div className="col-lg-6">
						<form>
							<div className="form-floating mb-3">
								<input
									className="form-control"
									id="inputName"
									type="text"
									placeholder="Имя или название организации"
								/>
								<label htmlFor="inputName">Имя или название организации</label>
							</div>
							<div className="form-floating mb-3">
								<input
									className="form-control"
									id="inputEmail"
									type="email"
									placeholder="Телефон"
								/>
								<label htmlFor="inputEmail">Телефон</label>
							</div>
							<div className="form-floating mb-3">
								<input
									className="form-control"
									id="inputPhone"
									type="tel"
									placeholder="Эл. почта"
								/>
								<label htmlFor="inputPhone">Эл. почта</label>
							</div>
							<div className="form-floating mb-3 form-floating_textarea">
								<textarea
									className="form-control form-control_textarea"
									id="inputMessage"
									type="text"
									placeholder="Размер, количество и назначение наклеек"
								></textarea>
								<label htmlFor="inputMessage">
									Размер, количество и назначение наклеек
								</label>
							</div>
							<div className="d-grid">
								<button className="btn btn-primary btn-xl" type="submit">
									Отправить
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
