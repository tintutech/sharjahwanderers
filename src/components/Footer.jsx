import "./footerStyles.css";
import "./endQuoteStyles.css";

function LeftContents() {
	return (
		<div className="footerLeft">
			<a href="#">
				<img src="/logo.svg" />
			</a>
			<div>
				<h2 className="footerBold">Sharjah Wanderers Sports Club</h2>
				<p>Samman,</p>
				<p>Harwan Suburb, Sharjah,</p>
				<p>United Arab Emirates</p>
			</div>
			<div className="contact">
				<h3>Get in touch</h3>
				<p>
					<img src="/phone.svg" /> : +97100000000
				</p>
				<p>
					<img src="/whatsapp.svg" /> : +97100000000
				</p>
				<p>
					<img src="/mail.svg" /> : info@Sharjahwsc.com
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
					<a href="#">HOME</a>
					<a href="#">ABOUT</a>
					<a href="#">MEMBERSHIP</a>
					<a href="#">EVENTS & OFFERS</a>
					<a href="#">RESTAURANT</a>
					<a href="#">SALON & SPA</a>
					<a href="#">FACILITIES</a>
					<a href="#">CONTACT</a>
				</div>
				<div>
					<p>FACILITIES</p>
					<a href="#">RUGBY FIELD</a>
					<a href="#">SWIMMING POOL</a>
					<a href="#">FOOTBALL FIELD</a>
					<a href="#">TENNIS COURT</a>
					<a href="#">GYM</a>
					<a href="#">TRAINING & CLASSES</a>
				</div>
				<div>
					<p>RESTAURANT</p>
					<a href="#">DINE-IN</a>
					<a href="#">DELIVERY</a>
					<a href="#">CATERING</a>
				</div>
			</div>
			<form action="#" method="POST">
				<p>Subscribe to our newsletter</p>
				<input type="text" placeholder="name@email.com"></input>
				<button type="submit">SUBSCRIBE</button>
			</form>
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
				<p>SHARJAH WANDERERS SPORTS CLUB</p>
			</div>
		</>
	);
}
