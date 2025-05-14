import HeroNav from "./HeroNav.jsx";
import MainContents from "./MainContents.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
	return (
		<div className="heroNav">
			<HeroNav />
			<MainContents />
			<Footer />
		</div>
	);
}
