function Navbar() {
	return (
		<div className="navBar">
			<div className="mobileNav">
				<a href="#">
					<img src="/logo.svg" />
				</a>
				<button className="hamburgerMenu">&#9776;</button>
			</div>
			<div className="desktopNav">
				<ul>
					<li>
						<a href="#">ABOUT</a>
					</li>
					<li>
						<a href="#">MEMBERSHIP</a>
					</li>
					<li>
						<a href="#">EVENTS & OFFERS</a>
					</li>
					<li>
						<a href="#">
							<img src="/logo.svg" />
						</a>
					</li>
					<li>
						<a href="#">RESTAURANT</a>
					</li>
					<li>
						<a href="#">FACILITIES</a>
					</li>
					<li>
						<a href="#">SPA & SALON</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

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

export default function Nav() {
	return (
		<div className="heroNav">
			<Navbar />
			<HeroSection />
		</div>
	);
}
