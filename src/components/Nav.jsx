import "./navStyles.css";

import Home from "../Home.jsx";
import AboutMembership from "../pages/aboutMembership/AboutMembership.jsx";

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
			<div className="openWindow hidden">
				<button onClick={closeWindow} className="close">
					&#128473;
				</button>
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
			<div className="mobileNav">
				<a href="#">
					<img src="/logo.svg" />
				</a>
				<button onClick={openWindow} className="hamburgerMenu">
					&#9776;
				</button>
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
						<a href="/">
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
