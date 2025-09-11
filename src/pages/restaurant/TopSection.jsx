import "./topSectionStyles.css";
import { HashLink } from "react-router-hash-link";

let rightData = {
	title: "RESTAURANT & BAR",
	para: "The comforts of home, classic British fare and popular modern dishes await at the ",
	span: "Clubhouse.",
};

function Left() {
	return (
		<div className="leftContents">
			<h2>{rightData.title}</h2>
			<p>
				{rightData.para}
				<span>{rightData.span}</span>
			</p>
		</div>
	);
}

function Right() {
	return (
		<div className="rightContents">
			<div className="top">
				<h3>MENUS</h3>
				<div>
					<HashLink smooth to="#dine">
						DINE-IN
					</HashLink>
					<HashLink smooth to="#delivery">
						DELIVERY
					</HashLink>
				</div>
				<div>
					<HashLink smooth to="#restaurantOffers">
						OFFERS
					</HashLink>
					<HashLink smooth to="#catering">
						CATERING
					</HashLink>
				</div>
			</div>
			<div className="bottom">
				<h4>KITCHEN HOURS</h4>
				<div>
					<p>Mon to Wed</p>
					<p>11am - 10pm</p>
				</div>
				<div>
					<p>Thursday</p>
					<p>11am - 10pm</p>
				</div>
				<div>
					<p>Fri & Sat</p>
					<p>11am - 10pm</p>
				</div>
				<div>
					<p>Sunday</p>
					<p>11am - 10pm</p>
				</div>
			</div>
		</div>
	);
}

export default function topSection() {
	return (
		<div className="topContent">
			<Left />
			<Right />
		</div>
	);
}
