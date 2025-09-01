import FAQ from "./FAQ.jsx";
import "./thirdSectionStyles.css";

function Membership() {
	return (
		<div className="membership">
			<h3>Psst, little secret.</h3>
			<p>
				All members of Sharjah Wanderers Sports Club get informed on exclusive
				discounts and offers from the Wandies Beauty Salon.
			</p>
			<a href="#">Become a member?</a>
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
				<Membership />
				<FAQ />
			</div>
		</div>
	);
}
