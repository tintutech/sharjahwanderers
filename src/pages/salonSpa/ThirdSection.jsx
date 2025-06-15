import FAQ from "./FAQ.jsx";
import "./thirdSectionStyles.css";

export default function ThirdSection() {
	return (
		<div className="thirdSection">
			<div className="one">
				<p>
					FOR ANY INFORMATION IN REGARDS TO OUR SALON AND SPA SERVICES, KINDLY{" "}
					<a>CONTACT US</a>
				</p>
			</div>
			<div className="two">
				<div className="card"></div>
				<FAQ />
			</div>
		</div>
	);
}
