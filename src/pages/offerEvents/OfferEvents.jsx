import Nav from "/src/components/Nav.jsx";
import Footer from "/src/components/Footer.jsx";
import First from "./First.jsx";
import Second from "./Second.jsx";
import Third from "./Third.jsx";
import Title from "../../components/ReactTitle.jsx";
import "./offerEventsStyles.css";

export default function OfferEvents() {
	return (
		<div id="offerEvents">
			<Title title="Events and Offers" description="Offers and Events Page" />
			<Nav />
			<First />
			<Second />
			<Third />
			<Footer />
		</div>
	);
}
