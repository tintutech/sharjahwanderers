import Nav from "/src/components/Nav.jsx";
import Footer from "/src/components/Footer.jsx";
import TopSection from "./TopSection.jsx";
import DineIn from "./DineIn.jsx";
import Delivery from "./Delivery.jsx";
import Offers from "./Offers.jsx";

import "./endQuoteStyles.css";
import "./restaurantStyles.css";

export default function Restaurant() {
	return (
		<div id="restaurant">
			<div className="top">
				<Nav />
				<TopSection />
			</div>
			<DineIn />
			<Delivery />
			<Offers />
			<div className="endQuote">
				<p>Not all those who wander are lost</p>
				<a href="#">Pay us a Visit</a>
			</div>
			<Footer />
		</div>
	);
}
