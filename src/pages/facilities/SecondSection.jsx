import image1 from "/facilities/image1.jpg";
import image2 from "/facilities/image2.jpg";
import image3 from "/facilities/image3.jpg";
import image4 from "/facilities/image4.jpg";
import image5 from "/facilities/image5.jpg";
import image6 from "/facilities/image6.jpg";
import image8 from "/facilities/image8.jpg";

let images = [image1, image2, image3, image4, image5, image6];

let cardData = [
	{
		title: "RUGBY FIELD",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: image[0],
	},
	{
		title: "SWIMMING POOL",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: image[1],
	},
	{
		title: "TENNIS COURT",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: image[2],
	},
	{
		title: "FOOTBALL FIELD",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: image[3],
	},
	{
		title: "PADEL COURT",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: image[4],
	},
	{
		title: "FITNESS GYM",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: image[5],
	},
	{
		title: "BATTING CAGE",
		desc: "Adipisicing odio optio et voluptas earum. Minus consequatur mollitia mollitia doloribus eum! Libero veniam rem",
		image: image[0],
	},
];

function Cards() {
	let cards = cardData.map((e) => {
		return (
			<div className="cards" style={{ background: e.image }}>
				<h2>{e.title}</h2>
				<p>{e.desc}</p>
				<div>
					<span className="plus">+</span>
					<span className="minus">-</span>
				</div>
			</div>
		);
	});
	return <div className="cardContainer">{cards}</div>;
}
