import Nav from "/src/components/Nav.jsx";
import Footer from "/src/components/Footer.jsx";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import ThirdSection from "./ThirdSection.jsx";
import Title from "../../components/ReactTitle.jsx";
import "./salonSpaStyles.css";

export default function SalonSpa() {
	return (
		<div id="salonspa">
			<Title title="Salon and Spa" />
			<Nav />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<Footer />
		</div>
	);
}
