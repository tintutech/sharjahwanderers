import "./footerStyles.css";
import "./endQuoteStyles.css";

function LeftContents() {
	return (
		<div className="footerLeft">
			<img src="/logo.svg" />
			<div>
				<h2 className="footerBold">Sharjah Wanderers Sports Club</h2>
				<p>Samman,</p>
				<p>Harwan Suburb, Sharjah,</p>
				<p>United Arab Emirates</p>
			</div>
			<div className="contact">
				<h3>Get in touch</h3>
				<p>
					<img /> : +97100000000
				</p>
				<p>
					<img /> : +97100000000
				</p>
				<p>
					<img /> : info@Sharjahwsc.com
				</p>
			</div>
			<div className="map">
				<h3>Find us.</h3>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7211.932917234021!2d55.4157314745558!3d25.338906525947866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5969efe4f7b9%3A0x97e652f434bbab95!2sSharjah%20Wanderers%20Sports%20Club!5e0!3m2!1sen!2sus!4v1748784679349!5m2!1sen!2sus"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					resizable="yes"
				></iframe>
				<a href="#">
					Get directions <span>&#9654;</span>
				</a>
			</div>
		</div>
	);
}

function RightContents() {
	return (
		<div className="footerRight">
			<div className="socials">
				<div className="links">
					<a href="#">
						<img />
					</a>
					<a href="#">
						<img />
					</a>
					<a href="#">
						<img />
					</a>
				</div>
				<p>Follow us on social media</p>
			</div>
			<div className="cards">
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
		</div>
	);
}

export default function Footer() {
	return (
		<>
			<div className="endQuote">
				<p>Not all those who wander are lost</p>
				<a href="#">Pay us a Visit</a>
			</div>

			<div className="footer">
				<div className="footerCards">
					<LeftContents />
					<RightContents />
				</div>
			</div>
		</>
	);
}
