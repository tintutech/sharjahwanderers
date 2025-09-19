import Nav from "/src/components/Nav.jsx";
import Footer from "/src/components/Footer.jsx";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import ThirdSection from "./ThirdSection.jsx";
import Title from "../../components/ReactTitle.jsx";
import "./salonSpaStyles.css";
import Announcements from "../../components/Announcements.jsx";

export default function SalonSpa() {
	return (
		<div id="salonspa">
			<Title title="Spa and Salon" description="Spa and Salon Page" />
			<Nav />
			<div className="announcementContainer">
				<Announcements pageTitle={"salon announcements"} />
			</div>

			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<Footer />
		</div>
	);
}
