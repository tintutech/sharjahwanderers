import Nav from "/src/components/Nav.jsx";
import Footer from "/src/components/Footer.jsx";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import ThirdSection from "./ThirdSection.jsx";

import "./salonSpaStyles.css";

export default function SalonSpa() {
	return (
		<div id="salonspa">
			<Nav />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<Footer />
		</div>
	);
}
