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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	const [scroll, setScroll] = useState(0);
	const [isOpened, setIsOpened] = useState(false);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	function handleOpen() {
		setIsOpened(true);
	}

	function handleClose() {
		setIsOpened(false);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<div id="page-top">
			<Switch>
				<Route exact path="/">
					<Navigation scroll={scroll} />
					<Header />
					<Lead />
					<About />
					<Services />
					<Link to="/slider">
						<Portfolio />
					</Link>
					<Contact />
					<Footer />
				</Route>
				<Route path="/slider">
					<Slider />
					<Link className="slider__close" to="/">
						Go back
					</Link>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
