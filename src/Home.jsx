import HeroNav from "./HeroNav.jsx";
import MainContents from "./MainContents.jsx";
import Footer from "./components/Footer.jsx";
import Title from "./components/ReactTitle.jsx";

import "./homeStyles.css";
export default function Home() {
	return (
		<div id="home">
			<Title
				title="Home"
				description="Home Page for Sharjah Wanderers Sports Club"
			/>
			<HeroNav />
			<MainContents />
			<Footer />
		</div>
	);
}
