import "./aboutMembershipStyles.css";
import "./endQuoteStyles.css";

import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";
import About from "./About.jsx";
import FAQ from "./FAQ.jsx";
import Membership from "./Membership.jsx";

export default function AboutMembership() {
	return (
		<div id="aboutMembership">
			<div class="topSection">
				<Nav />
				<About />
			</div>
			<div class="middleSection">
				<Membership />
				<FAQ />
				<div className="endQuote">
					<p>Not all those who wander are lost</p>
					<a href="#">Pay us a Visit</a>
				</div>
			</div>
			<Footer />
		</div>
	);
}
