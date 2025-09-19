import Nav from "/src/components/Nav.jsx";
import Footer from "/src/components/Footer.jsx";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import Title from "../../components/ReactTitle.jsx";
import "./facilitiesStyles.css";

// announcements
// first section top text
// expandable card grid with another card

export default function Facilities() {
	return (
		<div id="facilities">
			<Title title="Facilities" description="Facilities Page" />
			<Nav />
			<FirstSection />
			<SecondSection />
			<Footer />
		</div>
	);
}
