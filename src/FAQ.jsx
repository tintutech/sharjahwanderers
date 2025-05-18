let info = [
	{
		title: "CARD 1",
		cardInfo:
			"Ipsum laudantium dolore commodi voluptas autem. Voluptates molestiae voluptatem corrupti at nisi placeat a ipsa optio. Libero distinctio ducimus sed voluptas reprehenderit Praesentium hic aut",
	},
	{
		title: "CARD 2",
		cardInfo:
			"Amet ab quidem quaerat repudiandae maxime Enim commodi molestias nobis sed unde. Adipisci pariatur tempora nobis sapiente iste reiciendis Culpa corporis suscipit neque odio dicta",
	},
	{
		title: "CARD 3",
		cardInfo:
			"Ipsum laudantium dolore commodi voluptas autem. Voluptates molestiae voluptatem corrupti at nisi placeat a ipsa optio. Libero distinctio ducimus sed voluptas reprehenderit Praesentium hic aut",
	},
	{
		title: "CARD 4",
		cardInfo:
			"Amet ab quidem quaerat repudiandae maxime Enim commodi molestias nobis sed unde. Adipisci pariatur tempora nobis sapiente iste reiciendis Culpa corporis suscipit neque odio dicta",
	},
];

function toggle(e) {
	e.target.parentNode.parentNode
		.querySelector(".cardInfo")
		.classList.toggle("accordionHidden");
	console.log(e.target);
	if (e.target.textContent == "+") {
		e.target.textContent = "-";
	} else {
		e.target.textContent = "+";
	}
}

function ReturnCards() {
	const cards = info.map((i) => {
		return (
			<div key={i.title} className="cards">
				<div className="cardUpper">
					<h3>{i.title}</h3>
					<button onClick={toggle}>+</button>
				</div>
				<div className="cardInfo">
					<p>{i.cardInfo}</p>
				</div>
			</div>
		);
	});
	return (
		<div className="FAQ">
			<h2>Frequently asked questions</h2>
			{cards}
		</div>
	);
}

export default function FAQ() {
	return <ReturnCards />;
}
