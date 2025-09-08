let info = [
	{
		id: 0,
		title: "Can non members hire pitch facilities?",
		cardInfo:
			"Yes, and will have to pay additional non-member fees for usage, contact the front desk for more information, and Pitch hires.",
	},
	{
		id: 1,
		title: "Can Pitch facilities be used for events?",
		cardInfo:
			"All Venue and Pitch facilities can be used for venue hires, prior to confirmation from management and the Pitch hire. Fill out the form in the contact page",
	},
	{
		id: 2,
		title: "How to access Private Training and classes?",
		cardInfo:
			"All private training of the relevant facilities, are handled by the respective trainers of the specific facility subject to associated fees for Private training. All members get weekly members classes and training as per available schedule through the members portal.",
	},
];

import "./faqStyles.css";

function toggleClass(e) {
	let curr;
	if (
		e.target.nodeName.toLowerCase() == "button" ||
		e.target.nodeName.toLowerCase() === "h3"
	) {
		curr = e.target.parentNode;
	} else {
		curr = e.target;
	}
	let parentContainer = curr.parentNode.parentNode.querySelectorAll(
		".FAQcard .FAQcardUpper"
	);
	let contains;
	if (curr.classList.contains("open")) {
		contains = false;
	} else {
		contains = true;
	}
	let currButton = curr.querySelector("button");
	let currButtonText = currButton.textContent;

	parentContainer.forEach((e) => {
		e.classList.remove("open");
		e.querySelector("button").textContent = "+";
	});

	if (contains) {
		curr.classList.add("open");
	} else {
		curr.classList.remove("open");
	}

	if (currButtonText === "+") {
		currButton.textContent = "−";
	} else if (currButtonText === "−") {
		currButton.textContent = "+";
	}
}

function ReturnCards() {
	const cards = info.map((i) => {
		return (
			<div key={i.id} className="FAQcard">
				<div onClick={toggleClass} className="FAQcardUpper">
					<h3>{i.title}</h3>
					<button>+</button>
				</div>
				<div className="FAQcardInfo ">
					<p>{i.cardInfo}</p>
				</div>
			</div>
		);
	});
	return (
		<div id="FAQ">
			<h2>Frequently asked questions</h2>
			<div>{cards}</div>
		</div>
	);
}

export default function FAQ() {
	return (
		<>
			<ReturnCards />
		</>
	);
}
