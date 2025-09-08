import Nav from "/src/components/Nav.jsx";
import Footer from "/src/components/Footer.jsx";
import TopSection from "./TopSection.jsx";
import DineIn from "./DineIn.jsx";
import Delivery from "./Delivery.jsx";
import Offers from "./Offers.jsx";
import Catering from "./Catering.jsx";
import FAQ from "./FAQ.jsx";
import Title from "/src/components/ReactTitle.jsx";
import "./restaurantStyles.css";

export default function Restaurant() {
	return (
		<div id="restaurant">
			<Title title="Restaurant" />
			<div className="top">
				<Nav />
				<TopSection />
			</div>
			<DineIn />
			<Delivery />
			<Offers />
			<Catering />
			<FAQ />
			<Footer />
		</div>
	);
}
