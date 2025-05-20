import "./aboutMembershipStyles.css";

import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";
import About from "./About.jsx";

export default function AboutMembership() {
	return (
		<>
			<div id="topSection">
				<Nav />
				<About />
			</div>
			<Footer />
		</>
	);
}
