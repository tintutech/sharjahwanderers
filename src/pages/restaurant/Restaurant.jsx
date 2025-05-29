import Nav from "/src/components/Nav.jsx";
import Footer from "/src/components/Footer.jsx";
import DineIn from "./DineIn.jsx";

import "./restaurantStyles.css";

export default function Restaurant() {
	return (
		<div id="restaurant">
			<div className="top">
				<Nav />
			</div>
			<DineIn />
			<Footer />
		</div>
	);
}
