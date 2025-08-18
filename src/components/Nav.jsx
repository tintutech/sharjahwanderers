import "./navStyles.css";

function openWindow() {
	let open = document.querySelector(".openWindow");
	open.classList.remove("hidden");
}

function closeWindow() {
	let open = document.querySelector(".openWindow");
	open.classList.add("hidden");
}

export default function Navbar() {
	return (
		<div className="navBar">
			<dialog id="fullWindow"></dialog>
			<div className="openWindow hidden">
				<div className="closeDiv">
					<div></div>
					<button onClick={closeWindow} className="close">
						<img src="/multiply.svg" />
					</button>
				</div>
				<ul>
					<li>
						<a href="/">
							<img src="/logo.svg" />
						</a>
					</li>
					<li>
						<a href="/">HOME</a>
					</li>
					<li>
						<a href="/about">ABOUT</a>
					</li>
					<li>
						<a href="/membership">MEMBERSHIP</a>
					</li>
					<li>
						<a href="/events">EVENTS & OFFERS</a>
					</li>
					<li>
						<a href="/restaurant">RESTAURANT</a>
					</li>
					<li>
						<a href="/facilities">FACILITIES</a>
					</li>
					<li>
						<a href="/salonspa">SPA & SALON</a>
					</li>
					<li>
						<a href="/contact">CONTACT</a>
					</li>
				</ul>
				<a href="#">MEMBERS LOGIN</a>
				<p>Sharjah Wanderers Sports Club</p>
			</div>
			<div className="mobileNav">
				<a href="#">
					<img className="logo" src="/logo.svg" />
				</a>
				<button onClick={openWindow} className="hamburgerMenu">
					&#9776;
				</button>
			</div>
			<div className="desktopNav">
				<div className="topNav">
					<a href="/">
						<img src="/home.png" />
					</a>
					<div className="rightNavContents">
						<a href="#">
							members login
							<img src="/enter.svg" />
						</a>
						<a href="/contact">contact</a>
					</div>
				</div>
				<div className="bottomNav">
					<ul>
						<li>
							<a href="/about">ABOUT</a>
						</li>
						<li>
							<a href="/membership">MEMBERSHIP</a>
						</li>
						<li>
							<a href="/events">EVENTS & OFFERS</a>
						</li>
						<li>
							<a href="/">
								<img className="logo" src="/logo.svg" />
							</a>
						</li>
						<li>
							<a href="/restaurant">RESTAURANT</a>
						</li>
						<li>
							<a href="/facilities">FACILITIES</a>
						</li>
						<li>
							<a href="/salonspa">SPA & SALON</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
