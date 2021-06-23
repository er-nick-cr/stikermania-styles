import React from 'react';
import logo from '../images/Logo.svg';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParralaxElement from './ParralaxElement';

function Header() {
	return (
		<header className="header">
			<img
				className="header__logo slit-in-vertical"
				src={logo}
				alt="Stickermania"
			/>
		</header>
	);
}

export default Header;
