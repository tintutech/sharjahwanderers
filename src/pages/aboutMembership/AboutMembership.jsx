import "./aboutMembershipStyles.css";
import "../../components/endQuoteStyles.css";
import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";
import Title from "../../components/ReactTitle.jsx";
import About from "./About.jsx";
import FAQ from "./FAQ.jsx";
import Membership from "./Membership.jsx";

export default function AboutMembership() {
	try {
		return (
			<div id="aboutMembership">
				<Title
					title="About and Membership"
					description="About and Membership page"
				/>
				<div className="topSection">
					<Nav />
					<About />
				</div>
				<div className="middleSection">
					<Membership />
					<FAQ />
				</div>
				<Footer />
			</div>
		);
	} catch (err) {
		console.log(err);
	}
}
