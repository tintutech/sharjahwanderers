let info = [
	{
		title: "Membership requirements",
		cardInfo:
			"Ipsum laudantium dolore commodi voluptas autem. Voluptates molestiae voluptatem corrupti at nisi placeat a ipsa optio. Libero distinctio ducimus sed voluptas reprehenderit Praesentium hic aut",
	},
	{
		title: "Membership requirements",
		cardInfo:
			"Amet ab quidem quaerat repudiandae maxime Enim commodi molestias nobis sed unde. Adipisci pariatur tempora nobis sapiente iste reiciendis Culpa corporis suscipit neque odio dicta",
	},
	{
		title: "Membership requirements",
		cardInfo:
			"Ipsum laudantium dolore commodi voluptas autem. Voluptates molestiae voluptatem corrupti at nisi placeat a ipsa optio. Libero distinctio ducimus sed voluptas reprehenderit Praesentium hic aut",
	},
	{
		title: "Membership requirements",
		cardInfo:
			"Amet ab quidem quaerat repudiandae maxime Enim commodi molestias nobis sed unde. Adipisci pariatur tempora nobis sapiente iste reiciendis Culpa corporis suscipit neque odio dicta",
	},
];

import "./faqStyles.css";

function toggle(e) {
	e.target.parentNode.parentNode
		.querySelector(".cardInfo")
		.classList.toggle("hiddenCard");
	if (e.target.textContent == "+") {
		e.target.textContent = "−";
	} else {
		e.target.textContent = "+";
	}
}

function ReturnCards() {
	const cards = info.map((i) => {
		return (
			<div key={i.title} className="card">
				<div className="cardUpper">
					<h3>{i.title}</h3>
					<button onClick={toggle}>+</button>
				</div>
				<div className="cardInfo hiddenCard">
					<p>{i.cardInfo}</p>
				</div>
			</div>
		);
	});
	return (
		<div id="FAQ">
			<h2>Frequently asked questions</h2>
			{cards}
		</div>
	);
}

export default function FAQ() {
	return <ReturnCards />;
}
