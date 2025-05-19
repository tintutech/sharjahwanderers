import HeroNav from "./HeroNav.jsx";
import MainContents from "./MainContents.jsx";
import Footer from "./components/Footer.jsx";

import "./homeStyles.css";

export default function Home() {
	return (
		<>
			<HeroNav />
			<MainContents />
			<Footer />
		</>
	);
}
