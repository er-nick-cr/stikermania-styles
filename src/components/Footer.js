import React from 'react';
import logo from '../images/insta-logo.png';

function Footer() {
	return (
		<footer className="bg-light py-5">
			<div className="container px-4 px-lg-5 footer__container">
				<a
					href="https://www.instagram.com/stickermania.by/"
					className="header__link cursor"
					target="_blank"
				>
					<img src={logo} className="footer__logo" />
				</a>
				<div className="small text-center text-muted">Мы в инстаграмм</div>
				<div className="container px-4 px-lg-5">
					<div className="small text-center text-muted footer__fixed">
						Copyright &copy; 2021 - Sticker Mania by
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
