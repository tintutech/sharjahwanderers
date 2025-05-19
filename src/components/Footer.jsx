import "./footerStyles.css";

function LeftContents() {
	return (
		<div className="footerLeft">
			<img src="/logo.svg" />
			<p className="footerBold">Sharjah Wanderers Sports Club</p>
			<div>
				<p>Samman,</p>
				<p>Harwan Suburb,</p>
				<p>Sharjah,</p>
				<p>United Arab Emirates</p>
			</div>
			<p>
				<span className="footerBold">TEL:</span> +97100000000
			</p>
			<p>
				<span className="footerBold">EMAIL:</span> info@sharjahwac.com
			</p>
		</div>
	);
}

function RightContents() {
	return (
		<div className="footerRight">
			<div>
				<a href="#">Home</a>
				<a href="#">Salon & Spa</a>
				<a href="#">Membership</a>
				<a href="#">Restaurant</a>
				<a href="#">Events</a>
				<a href="#">Offers</a>
				<a href="#">Contact</a>
			</div>
			<div>
				<a href="#">Facilities</a>
				<a href="#">Home</a>
				<a href="#">Home</a>
				<a href="#">Home</a>
				<a href="#">Home</a>
				<a href="#">Home</a>
				<a href="#">Home</a>
			</div>
		</div>
	);
}

export default function Footer() {
	return (
		<div className="footer">
			<div className="footerCards">
				<LeftContents />
				<RightContents />
			</div>
		</div>
	);
}
