let info = [
	{
		id: 0,
		title: "SALON & SPA QUESTIONS",
		cardInfo:
			"Ipsum laudantium dolore commodi voluptas autem. Voluptates molestiae voluptatem corrupti at nisi placeat a ipsa optio. Libero distinctio ducimus sed voluptas reprehenderit Praesentium hic aut",
	},
	{
		id: 1,
		title: "SALON & SPA QUESTIONS",
		cardInfo:
			"Amet ab quidem quaerat repudiandae maxime Enim commodi molestias nobis sed unde. Adipisci pariatur tempora nobis sapiente iste reiciendis Culpa corporis suscipit neque odio dicta",
	},
	{
		id: 2,
		title: "SALON & SPA QUESTIONS",
		cardInfo:
			"Ipsum laudantium dolore commodi voluptas autem. Voluptates molestiae voluptatem corrupti at nisi placeat a ipsa optio. Libero distinctio ducimus sed voluptas reprehenderit Praesentium hic aut",
	},
	{
		id: 3,
		title: "SALON & SPA QUESTIONS",
		cardInfo:
			"Amet ab quidem quaerat repudiandae maxime Enim commodi molestias nobis sed unde. Adipisci pariatur tempora nobis sapiente iste reiciendis Culpa corporis suscipit neque odio dicta",
	},
];

import "./faqStyles.css";

function toggleClass(e) {
	let curr;
	if (e.target.nodeName.toLowerCase() == "button") {
		curr = e.target.parentNode;
	} else {
		curr = e.target;
	}
	let parentContainer =
		curr.parentNode.parentNode.querySelectorAll(".card .cardUpper");
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
			<div key={i.id} className="faqCard">
				<div onClick={toggleClass} className="faqCardUpper">
					<h3>{i.title}</h3>
					<button>+</button>
				</div>
				<div className="faqCardInfo hiddenFaqCard">
					<p>{i.cardInfo}</p>
				</div>
			</div>
		);
	});
	return (
		<div className="FAQ">
			<h2>Frequently asked questions</h2>
			<div className="faqCardContainer">{cards}</div>
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
