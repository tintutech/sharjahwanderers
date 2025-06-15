import FAQ from "./FAQ.jsx";
import "./thirdSectionStyles.css";

function Membership() {
	return (
		<div className="membership">
			<h3>Membership</h3>
			<p>
				Become part of the club, explore unique offers, and enjoy unparalleled
				access to our exclusive club.
			</p>
			<a href="#">ACTION BUTTON</a>
		</div>
	);
}

export default function ThirdSection() {
	return (
		<div className="thirdSection">
			<div className="one">
				<p>
					FOR ANY INFORMATION IN REGARDS TO OUR SALON AND SPA SERVICES, KINDLY{" "}
					<a>CONTACT US</a>
				</p>
			</div>
			<div className="two">
				<div className="card">
					<Membership />
				</div>
				<FAQ />
			</div>
		</div>
	);
}
