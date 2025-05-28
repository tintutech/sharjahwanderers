import Nav from "/src/components/Nav.jsx";
import Footer from "/src/components/Footer.jsx";

export default function Restaurant() {
	return (
		<div id="restaurant">
			<div className="top">
				<Nav />
			</div>
			<object
				className="pdf"
				data="/public/dineIn.pdf"
				width="800"
				height="600"
			></object>

			<Footer />
		</div>
	);
}
