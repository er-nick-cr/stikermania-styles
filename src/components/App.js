import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Lead from './Lead';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import ParallaxLead from './ParallaxLead';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParralaxElement from './ParralaxElement';
import useWindowWidth from '../hooks/useWindowWidth';

function App() {
	const [scroll, setScroll] = useState(0);
	const width = useWindowWidth();
	const [isNavbarActive, setNavbarActive] = useState(false);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	const handleNavbarActiveToggler = () => {
		isNavbarActive ? setNavbarActive(false) : setNavbarActive(true);
	};

	const handleNavbarActive = () => {
		setNavbarActive(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<ParallaxProvider>
			<div id="page-top">
				<Navigation
					scroll={scroll}
					isNavbarActive={isNavbarActive}
					setNavbarActiveToggler={handleNavbarActiveToggler}
					setNavbarActive={handleNavbarActive}
				/>
				<Header />
				{width > 1040 ? <ParallaxLead /> : <Lead />}
				<About />
				<Services />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		</ParallaxProvider>
	);
}

export default App;
