import Nav from "/src/components/Nav.jsx";
import Form from "./Form.jsx";

import Footer from "/src/components/Footer.jsx";
import "./generalContactStyles.css";
import "./contactStyles.css";

export default function Contact() {
	return (
		<div id="contact">
			<Nav />
			<Form />
			<Footer />
		</div>
	);
}
