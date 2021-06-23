import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Lead from './Lead';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Slider from './Slider';
import ParallaxLead from './ParallaxLead';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParralaxElement from './ParralaxElement';

function App() {
	const [scroll, setScroll] = useState(0);
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
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/">
						<div id="page-top">
							<Navigation
								scroll={scroll}
								isNavbarActive={isNavbarActive}
								setNavbarActiveToggler={handleNavbarActiveToggler}
								setNavbarActive={handleNavbarActive}
							/>
							<Header />
							<ParallaxLead />
							{/* <Lead /> */}
							<About />
							<Services />
							<Link to="/slider">
								<Portfolio />
							</Link>
							<Contact />
							<Footer />
						</div>
					</Route>
					<Route path="/slider">
						<Slider />
						<Link className="slider__close" to="/">
							Go back
						</Link>
					</Route>
				</Switch>
			</Router>
		</ParallaxProvider>
	);
}

export default App;
