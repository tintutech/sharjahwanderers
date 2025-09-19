import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";
import lost from "/lost.png";
import "./notFoundStyles.css";
import Title from "/src/components/ReactTitle.jsx";

export default function NotFound() {
	return (
		<div id="notFound">
			<Title title="Not Found" description="Not Found Page" />
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
