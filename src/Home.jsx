import HeroNav from "./HeroNav.jsx";
import MainContents from "./MainContents.jsx";
import Footer from "./Footer.jsx";

import "./homeStyles.css";
import "./heroNavStyles.css";
import "./mainContentStyles.css";
import "./footerStyles.css";

export default function Home() {
	return (
		<>
			<HeroNav />
			<MainContents />
			<Footer />
		</>
	);
}
