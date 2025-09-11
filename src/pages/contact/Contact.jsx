import Nav from "/src/components/Nav.jsx";
import Form from "./Form.jsx";
import Footer from "/src/components/Footer.jsx";
import "./generalContactStyles.css";
import "./contactStyles.css";

import Title from "../../components/ReactTitle.jsx";
import Timing from "./Timing.jsx";
export default function Contact() {
	return (
		<div id="contact">
			<Title title="Contact" />
			<Nav />
			<Form />
			<Timing />
			<Footer />
		</div>
	);
}
