import Nav from "/src/components/Nav.jsx";
import Footer from "/src/components/Footer.jsx";
import DineIn from "./DineIn.jsx";

import "./restaurantStyles.css";

function close(e) {
	document.querySelector(".fullPage").close();
}

export default function Restaurant() {
	return (
		<div id="restaurant">
			<dialog className="fullPage">
				<img onClick={(e) => close(e)} src="/multiply.svg" />
				<img className="expandedPage" />
			</dialog>

			<div className="top">
				<Nav />
			</div>
			<DineIn />
			<Footer />
		</div>
	);
}
