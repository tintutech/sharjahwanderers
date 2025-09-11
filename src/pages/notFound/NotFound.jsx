import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";
import lost from "/lost.png";
import "./notFoundStyles.css";

export default function NotFound() {
	return (
		<div id="notFound">
			<Nav />
			<div className="mainContent">
				<p>
					opps, looks like you <span>wandered</span> too far...
				</p>
				<img src={lost} />
				<a href="/">GO HOME</a>
			</div>

			<Footer />
		</div>
	);
}
