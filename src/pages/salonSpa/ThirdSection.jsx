import FAQ from "./FAQ.jsx";

export default function ThirdSection() {
	return (
		<div className="thirdSection">
			<div className="one">
				<p>
					FOR ANY INFORMATION IN REGARDS TO OUR SALON AND SPA SERVICES, KINDLY{" "}
					<span>CONTACT US</span>
				</p>
			</div>
			<div className="two">
				<div className="card"></div>
				<FAQ />
			</div>
		</div>
	);
}
