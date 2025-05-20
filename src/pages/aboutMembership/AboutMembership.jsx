import "./aboutMembershipStyles.css";

import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";
import About from "./About.jsx";
import FAQ from "./FAQ.jsx";

export default function AboutMembership() {
	return (
		<>
			<div id="topSection">
				<Nav />
				<About />
			</div>
			<div id="membership">
				<FAQ />
			</div>
			<Footer />
		</>
	);
}
