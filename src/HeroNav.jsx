import "./heroStyles.css";
import Nav from "./components/Nav.jsx";

function HeroSection() {
	return (
		<div className="heroSection">
			<div className="heroLeft">
				<h2>
					A private{" "}
					<span className="heroSpecial">
						<em>Oasis</em>
					</span>
					, for all wanderers in Sharjah.
				</h2>
				<p>Be part of the club, become a member today!</p>
				<div className="bg-blur">
					<a href="#">Become a member</a>
				</div>
				<div className="bg-blur">
					<a href="#">Explore offers, or attend an event?</a>
				</div>
			</div>
			<div className="heroRight"></div>
		</div>
	);
}

export default function HeroNav() {
	return (
		<div className="heroNav">
			<Nav />
			<HeroSection />
		</div>
	);
}
