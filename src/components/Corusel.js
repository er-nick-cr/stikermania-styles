import React from 'react';
import march from '../images/slider/1.jpg';
import girl from '../images/slider/2.jpg';
import table from '../images/slider/3.jpg';
import golography from '../images/slider/4.JPEG';
import pot from '../images/slider/5.JPEG';
import poster from '../images/slider/6.JPG';
import snowboard from '../images/slider/7.jpg';
import dj from '../images/slider/8.JPEG';
import vpiska from '../images/slider/9.JPEG';
import tree from '../images/slider/10.JPG';
import door from '../images/slider/11.jpg';
import pen from '../images/slider/12.JPG';
import red from '../images/slider/13.JPG';
import hands from '../images/slider/14.JPG';
import banana from '../images/slider/15.JPG';
import stairs from '../images/slider/16.JPEG';
import scissors from '../images/slider/17.JPEG';
import forward from '../images/slider/18.JPEG';
import vinyl from '../images/slider/19.JPEG';
import bus from '../images/slider/20.JPEG';
import colors from '../images/slider/21.JPG';
import sand from '../images/slider/22.jpg';
import micro from '../images/slider/23.jpg';
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselElement,
} from 'mdb-react-ui-kit';

function Corusel() {
	return (
		<section className="corusel">
			<div className="corusel__container">
				<div className="corusel__header">
					<h3 className="corusel__heading">Посмотрите, что она творит!</h3>
				</div>
				<MDBCarousel showControls showIndicators>
					<MDBCarouselInner>
						<MDBCarouselItem itemId={0}>
							<MDBCarouselElement src={march} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={1}>
							<MDBCarouselElement src={girl} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={2}>
							<MDBCarouselElement src={table} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={3}>
							<MDBCarouselElement src={golography} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={4}>
							<MDBCarouselElement src={pot} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={5}>
							<MDBCarouselElement src={poster} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={6}>
							<MDBCarouselElement src={snowboard} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={7}>
							<MDBCarouselElement src={dj} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={8}>
							<MDBCarouselElement src={vpiska} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={9}>
							<MDBCarouselElement src={tree} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={10}>
							<MDBCarouselElement src={door} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={11}>
							<MDBCarouselElement src={pen} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={12}>
							<MDBCarouselElement src={red} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={13}>
							<MDBCarouselElement src={hands} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={14}>
							<MDBCarouselElement src={banana} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={15}>
							<MDBCarouselElement src={stairs} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={16}>
							<MDBCarouselElement src={scissors} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={17}>
							<MDBCarouselElement src={scissors} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={18}>
							<MDBCarouselElement src={forward} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={19}>
							<MDBCarouselElement src={vinyl} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={20}>
							<MDBCarouselElement src={bus} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={21}>
							<MDBCarouselElement src={colors} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={22}>
							<MDBCarouselElement src={sand} alt="First slide" />
						</MDBCarouselItem>
						<MDBCarouselItem itemId={23}>
							<MDBCarouselElement src={micro} alt="First slide" />
						</MDBCarouselItem>
					</MDBCarouselInner>
				</MDBCarousel>
			</div>
		</section>
	);
}

export default Corusel;
